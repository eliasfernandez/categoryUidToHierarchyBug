config.index_enable = 1

page = PAGE
page.10  < styles.content.get

plugin.tx_solr{
    index {
        fieldProcessingInstructions.category_stringM = categoryUidToHierarchy
        #queue.news.fields.category_stringM.enableRecursiveValueResolution = 1
        queue.news.fields{

            category_stringM = SOLR_RELATION
            category_stringM {
                localField = categories
                relationTableSortingField = sorting
                multiValue = 1
                foreignLabelField = uid
                enableRecursiveValueResolution = 1
                relationTableSortingField = sorting
            }
        }
    }
    search.faceting = 1
    search.faceting {
        facets {
            categoryHierarchy {
                label = Category
                field = category_stringM
                partialName = Category
                type = hierarchy
                sortBy = alpha asc
            }
        }
    }

}