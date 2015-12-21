mithril-global-request-headers
==============================

A simple (POC) module for adding global http headers support to m.request.

Eg

Init
----

    require('mithril-global-request-headers')(m)

Add a header
------------

    require('mithril-global-request-headers')(m)

    m.addGlobalHeader('authorization', 'key...')

Remove headers
--------------

    require('mithril-global-request-headers')(m)

    m.addGlobalHeader('authorization', 'key...')
    m.removeGlobalHeader('authorization', 'key...') // Remove exact

    m.addGlobalHeader('authorization', 'key...')
    m.removeGlobalHeader('authorization') // Remove based on key match

Access all configured headers
-----------------------------

    require('mithril-global-request-headers')(m)

    m.getGlobalHeaders()

Don't add global headers to a single request
--------------------------------------------

    require('mithril-global-request-headers')(m)

    m.request({ disableGlobalHeaders: true, ... })
