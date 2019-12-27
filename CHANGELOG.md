## [3.0.0](https://github.com/TravelTripperWeb-Sites/blank-template/releases/3.0.0)

Overall changes:

* updated changelogs for all submodules
[plugins](https://github.com/TravelTripperWeb/cms-jekyll-3-8-plugins/tree/v1.2.0/CHANGELOG.md)
[bedrock](https://github.com/TravelTripperWeb/_ttio_templates-bedrock/tree/v3.0.0/CHANGELOG.md)
[conversion-plus](https://github.com/TravelTripperWeb/_ttio_templates-conversion-plus/tree/v3.0.0/CHANGELOG.md)
[zom](https://github.com/TravelTripperWeb/_ttio_templates-zom/tree/v3.0.0/CHANGELOG.md)
* updated readmes for all submodules
[plugins](https://github.com/TravelTripperWeb/cms-jekyll-3-8-plugins/tree/v1.2.0/README.md)
[bedrock](https://github.com/TravelTripperWeb/_ttio_templates-bedrock/tree/v3.0.0/README.md)
[conversion-plus](https://github.com/TravelTripperWeb/_ttio_templates-conversion-plus/tree/v3.0.0/README.md)
[zom](https://github.com/TravelTripperWeb/_ttio_templates-zom/tree/v3.0.0/README.md)

* Refactored conversion plus/ttweb plugins settings into conversion-plus submodule
* Fixed package.json to  use webpack and compile JS during npm run start
* new structure for default layout
* added include for docready fix (fire document.ready after all css is loaded)
* rename conversion_plus settings to conversion_plus_banner settings
* rename ttweb_plugins settings to conversion_plus settings
* add RVNG settings options
* created default _data/_cms_config/content_nav.yml file for configuring CMS menu
* added default _data/_cms_config/settings_nav.yml file - use this to manage whether BRG or CP settings are shown
* create layouts for CMS and dynamic rooms and offers (including featured sub-lists)
* remove required setting for most fields in most models
* changed CSS import to handle bedrock themes
* change config.yml to handle bedrock themes
* removed gallery layout (just use generic page and add a gallery picker region)
* node package updates for security
* add accessibility to attractions map
* siteindex.json files (for searches) with LoadSiteIndex function and basic search page implementation
* LoadPostsIndex function and basic posts.json usage implementation (load-more action)
* update SEO include to allow for explicit vs title-partials
* update page-gen to allow for SEO fields (meta.meta_tile, .meta_title_prefix, .meta_description)
* Added lightbox accessibility
* Added zoom-level detection
* Updated subnav accessibility
* Allow swipe in LightBox


