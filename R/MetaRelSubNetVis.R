#################################################
## MetaRelSubNetVis aspect implementation
##
## This extends the RCX data model to handle
## MetaRelSubNetVis aspects in R
##
## Florian J. Auer
## April 2022
#################################################

## For the conversion from and to RCX those two functions for JSON handling have to be implemented:

rcxToJson.MetaRelSubNetVisAspect = function(aspect, verbose=FALSE, ...){
	if(verbose) cat("Convert MetaRelSubNetVis to JSON...")
	# json = jsonlite::toJSON(list(metaRelSubNetVis=aspect), pretty = T, auto_unbox = T)
	json = RCX:::.addAspectNameToJson(paste0("[",jsonlite::toJSON(aspect, pretty = T, auto_unbox = T),"]"), "metaRelSubNetVis")
	if(verbose) cat("done!\n")
	return(json)
}

jsonToRCX.metaRelSubNetVis = function(jsonData, verbose){
	if(verbose) cat("Parsing MetaRelSubNetVis...")
	data = jsonData$metaRelSubNetVis
	
	result = data[[1]]
	class(result) = c(class(result), "MetaRelSubNetVisAspect")
	return(result)
}

## Create the aspect (including some convenience/helper functions)

createMetaRelSubNetVisMappings = function(from, to){
	result = as.list(to)
	names(result) = from
	class(result) = c(class(result), "MetaRelSubNetVisMappings")
	return(result)
}

createMetaRelSubNetVisProperty = function(property, label, mapping, type="continuous", threshold=FALSE){
	result = list(
		property = property, 
		label = label, 
		mapping = mapping, 
		type = type, 
		threshold = threshold
	)
	class(result) = c(class(result), "MetaRelSubNetVisProperty")
	return(result)
}

createMetaRelSubNetVisProperties = function(properties){
	class(properties) = c(class(properties), "MetaRelSubNetVisProperties")
	return(properties)
}

createMetaRelSubNetVis = function(highlight=NULL,
																	properties=NULL,
																	individual_properties=NULL){
	result = list(highlight = highlight,
								properties = properties,
								individual_properties = individual_properties)  
	
	class(result) = c(class(result), "MetaRelSubNetVisAspect")
	return(result)
}

## Update aspects and RCX models

updateMetaRelSubNetVis = function(x, metaRelSubNetVis, replace=TRUE){
	UseMethod("updateMetaRelSubNetVis", x)
}

updateMetaRelSubNetVis.MetaRelSubNetVisAspect = function(x, metaRelSubNetVis, replace=TRUE){
	if( (! "highlight" %in% names(x)) || replace) x$highlight = metaRelSubNetVis$highlight
	
	prop = x$properties
	propNames = sapply(prop, function(y){y$property})
	names(prop) = propNames
	for(p in metaRelSubNetVis$properties){
		if((! p$property %in% propNames) || replace){
			prop[[p$property]] = p
		}
	}
	names(prop) = NULL
	x$properties = prop
	
	prop = x$individual_properties
	propNames = sapply(prop, function(y){y$property})
	names(prop) = propNames
	for(p in metaRelSubNetVis$individual_properties){
		if((! p$property %in% propNames) || replace){
			prop[[p$property]] = p
		}
	}
	names(prop) = NULL
	x$individual_properties = prop
	
	return(x)
}

updateMetaRelSubNetVis.RCX = function(x, metaRelSubNetVis, replace=TRUE){
	if(is.null(x$metaRelSubNetVis)){
		x$metaRelSubNetVis = metaRelSubNetVis
	}else{
		x$metaRelSubNetVis = updateMetaRelSubNetVis(x$metaRelSubNetVis, metaRelSubNetVis, replace)
	}
	return(x)
}

## Print the aspect

print.MetaRelSubNetVisAspect = function(x, ...){
	cat("MetaRelSubNetVis:\n")
	if("highlight" %in% names(x)){
		cat("highlight: ", x$highlight, "\n")
	}
	
	if("properties" %in% names(x)){
		thresholds = c()
		cat("properties:\n")
		for (p in x$properties) {
			cat(paste0(" - \"", p$label, "\"\tproperty: \"", p$property, "\"\ttype: ", p$type, "\n"))
			cat("   mapping:", paste(names(p$mapping), "->", p$mapping, sep=" ", collapse = ",\t"), "\n\n")
			if(p$type == "continuous" && ifelse("threshold" %in% names(p), p$threshold, FALSE)) thresholds = c(thresholds, p$label)
		}
		if(length(thresholds)!=0){
			cat(" Thresholds for:\n")
			cat(paste(" -", thresholds, collapse = "\n"),"\n")
		}
	}
	
	if("properties" %in% names(x) && "individual_properties" %in% names(x)) cat("\n")
	
	if("individual_properties" %in% names(x)){
		thresholds = c()
		cat("individual properties:\n")
		for (p in x$individual_properties) {
			cat(paste0(" - \"", p$label, "\"\tproperty: \"", p$property, "\"\ttype: ", p$type, "\n"))
			cat("   mapping:", paste(names(p$mapping), "->", p$mapping, sep=" ", collapse = ",\t"), "\n\n")
			if(p$type == "continuous" && ifelse("threshold" %in% names(p), p$threshold, FALSE)) thresholds = c(thresholds, p$label)
		}
		if(length(thresholds)!=0){
			cat(" Thresholds for:\n")
			cat(paste(" -", thresholds, collapse = "\n"),"\n")
		}
	}
}

## Special print functions for helper classes

print.MetaRelSubNetVisProperties = function(x, ...){
	thresholds = c()
	for (p in x) {
		cat(paste0(" - \"", p$label, "\"\tproperty: \"", p$property, "\"\ttype: ", p$type, "\n"))
		cat("   mapping:", paste(names(p$mapping), "->", p$mapping, sep=" ", collapse = ",\t"), "\n\n")
		if(p$type == "continuous" && ifelse("threshold" %in% names(p), p$threshold, FALSE)) thresholds = c(thresholds, p$label)
	}
	if(length(thresholds)!=0){
		cat(" Thresholds for:\n")
		cat(paste(" -", thresholds, collapse = "\n"),"\n")
	}
}

print.MetaRelSubNetVisProperty = function(x, ...){
	cat(paste0(" - \"", x$label, "\"\tproperty: \"", x$property, "\"\ttype: ", x$type, "\n"))
	cat("   mapping:", paste(names(x$mapping), "->", x$mapping, sep=" ", collapse = ",\t"), "\n\n")
}

print.MetaRelSubNetVisMappings = function(x, ...){
	cat("   mapping:", paste(names(x), "->", x, sep=" ", collapse = ",\t"), "\n\n")
}

## Determine the element count in the metaData

countElements.MetaRelSubNetVisAspect = function(x){
	return(length(x$properties) + length(x$individual_properties))
}
