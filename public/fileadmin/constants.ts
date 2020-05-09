plugin.tx_solr {
    solr {
        host = solr
        port = 8983
        path = /solr/core_en/
    }

    view {
        templateRootPath = DIR:fileadmin/Resources/Private/Templates/Extensions/solr/
        partialRootPath = DIR:fileadmin/Resources/Private/Partials/Extensions/solr/
        layoutRootPath = DIR:fileadmin/Resources/Private/Layouts/Extensions/solr/
    }
}
plugin.tx_news.settings.detailPid = 1