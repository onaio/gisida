# Gisida OAuth Implementation

This document provides information and instructions on how to implement different access levels to users based on the assign permissions. This includes layers and dashboards.

## Authentication

Gisida sittes with authentication process uses Oauth2 [implicit grant type](https://oauth.net/2/grant-types/implicit/), utilizing Ona's [oAuth2 provider](https://api.ona.io/static/docs/authentication.html#using-oauth2-with-the-ona-api).

In order to successfully log in to the dashboard, users need to first create an account with [ONA](https://ona.io) since we are using onadata as the sole Oauth2 provider.

An authentication XLSForm is created that adopts the following format. On the survey sheet, we use the question type `acknowledge`. For Views, use VIEW.nameofview e.g VIEW.Home, VIEW.Iframe e.t.c and for layers we use LAYER.nameoflayer `as defined in site-config` e.g LAYER.district-labels e.t.c. To control users with access to dashboards, we use VIEW.dashboards.dashbord_name.`The name of the dashboard should be **-** separated eg **VIEW.dashboards.Nutrition-Cluster**
|type|name|label|
|-----|----|----|
|text|username|Username|
|acknowledge|LAYER.ALL|Has access to all layers|
|acknowledge|VIEW.Home|Has access to Home view|
|acknowledge|VIEW.Iframe|Has access to Iframes|
|acknowledge|VIEW.dashboards.Nutrition-Cluster|Has access to Nutrition Cluster dashboard|
|acknowledge|VIEW.dashboards.CP-Dashboard|Hasaccess to CP Dashboard|
|acknowledge|LAYER.somalia-population|Has access to Population Numbers & Density|
|acknowledge|LAYER.nutrition-sites-live|Has access to Nutrition Sites(Live)|

The form should then be uploaded to a project in Ona. Use [Link a dataset as a media file to another form](https://help.ona.io/knowledge-base/how-do-i-link-a-dataset-as-a-media-file-to-another-form/) to get the data in a CSV. The CSV id is then used as the `"authConfig"` id in site-config

**NOTE**
Users added to the form should be added to the project where the form is located as Collaborators.

Utilizing a form CSV attachment containing supplementary authorization configs, the dashboard handles role-based access and permissions. This CSV shall be shared with the client's Admin account from the onasupport account, and uses the following format:

|username|VIEW.Home|VIEW.Iframe|VIEW.Summary|LAYER.layer-id-1|VIEW.dashboards.Nutrition-Cluster|VIEW.dashboards.CP-Dashboard|
|:--------|:---------|:----|:-----------|:----------------|:---------|:-----|
| user1  | OK      |OK| null       | OK             |    OK     |null|
| user2  | null    |OK| OK         | null           |null|OK|
| user3  | OK      |null| OK       | OK          |     null    |null|

In the above table,
User 1 has access to the Home page and the Iframes, he however does not have access to the Summary page.
User 2 has access to the Summary page and the Iframe without the Home page.
User 3 has access to the Home page and the Summary page without the Iframes.

User 1 has access to the Nutrition dashboard while User 2 has acces to the CP dasboard.
User 3 does not have access to any of the dashboards.

Similarly, this format supports user level layer permissions, which can be managed by adding layers as columns, and decide whether or not a particular user has access to a layer.

* **username** : The Ona account username for a given user.
* **VIEW.{X}** : `X` signifies the React component responsible for the page-level view.
* **VIEW.dasboards.{Y}** : `Y` signifies the name of the dashboard, should be _-_ separated.
* **LAYER.{Z}** : `Z` signifies the ID of the layer, usually the name of the JSON layer config file.
