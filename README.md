mithril-global-request-headers
==============================

A simple (POC) module for adding global headers support to m.request.

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

    m.addGlobalHeader('authorization', 'key...')
    m.removeGlobalHeader('authorization', 'key...') // Remove exact

    m.addGlobalHeader('authorization', 'key...')
    m.removeGlobalHeader('authorization') // Remove based on key match

Access all configured headers
-----------------------------

    m.getGlobalHeaders()

Don't add global headers to a single request
--------------------------------------------

    m.request({ disableGlobalHeaders: true, ... })
