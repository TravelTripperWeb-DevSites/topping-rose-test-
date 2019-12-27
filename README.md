# [TTWeb CMS Blank Hotel Site Template](https://github.com/TravelTripperWeb-Sites/blank-template)

This is a starting point for new ttweb sites that use
* bedrock template
* conversion-plus template
* zom CSS/JS framework

:sparkles: See what's new in the [CHANGELOG](CHANGELOG.md).


## Quick Start

```
git clone REPO-URL-FROM-TTWEB-UI
git submodule update --init
cd REPO-NAME
npm install
bundle install
npm run start
```


If you're doing template (bedrock, zom, etc) development, do the above for setup, but instead run 
```
npm run template-dev
```
to get rebuilds/refreshes based on changes to files in the plugins and templates folder in addition to standard folders





## Usage

### Customizing template files and content

Any template file provided by a submodule (layouts, includes, locale files) can be overriden in this site. For example, if you want to customize the template used for dynamic offer rendering,
copy the file from it's source, e.g. _ttio_templates/bedrock/_includes/components/offer/dynamic-offer-fields, to your own _includes directory e.g. _includes/components/offer/dynamic-offer-fields

In general, the naming change you'll make is:

<submodule_root>/_includes/*  => _includes/*
<submodule_root>/_layouts/*   => _layouts/*
<submodule_root>/_locales/*   => _locales/*

### Data Settings

Just like for template files and content, you can override data files, which include model defitions and general content/site-settings.
For example, you can create the file _data/seo.yml to override the values in _ttio_templates/bedrock/_data/seo.yml or you can overwrite the definition of a model in _ttio_templates/bedrock/_data/_definitions/amenities.json by creating your own version at _data/_definitions/amenities.json

However, there's a distinction between content settings in YML files and model definitions and orther data files that are used by the models system. In content settings file, the values are used by jekyll only and are actually merged between submodules. So, for example, if you have

_ttio_templates/bedrock/_data/seo.yml:
default_title: Bedrock 
title_separator: |

_data/seo.yml:
default_title: My Site

When you run jekyll, you'llhave `site.data.default_title == "My Site"`, but still have `site.data.title_separator== "|"`

On the other hand, if you create a model definition override in your local copy, it will completely overwrite what the submodule's version contains instead of merging with it.

_region_config is another area where settings *will* merge - and you can use directories as keys.

So you can create _data/_region_config/my_new_region_type.yml and it will be added to the default region configuration provided by _ttio_templates/bedrock/_data/_region_config.yml


### CSS Customization

The default set up for _sass files is to load:
* zom core functions
* local variables files
* bedrock theme selection (see Theme Selection section below)
* local customizations

Generally you want to just add files to the _sass/custom directory and include them via _sass/custom/_all.css. You will have access to all ZOM and Bedrock-defined functions and mixins and variables from here.

You can also completely change the main.scss file if you're not using the standard framework set.

### Theme Selection

For now to switch themes, you'll need update 5 different lines of code

* 4 lines in _config.yml: change all the references to theme folder, replacing 'none' with 'your-theme-name' in the 4 relevant paths
* 1 line in in _sass/_theme-selection.scss: change 'none' to 'your-theme-name'

There will be a way to automate this via the CMS in the future


### Customing the CMS UI

The Blank Template now includes a default content_nav.yml and settings_nav.yml in _data/_cms_config/
If you add settings files and models that should be part of the CMS UI, you'll need to update these files. The full spec for them is here [https://agency-docs.traveltripper.io/cms-menu-config/](https://agency-docs.traveltripper.io/cms-menu-config/)


### More Details

For information on how each submodule's components work, please see the readme for those modules



For detailed instructions on how to configure, customize, add content, and more read the [documentation](https://github.com/TravelTripperWeb-Sites/blank-template/wiki).

