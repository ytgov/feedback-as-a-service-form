## CONTENTS OF THIS FILE

- Introduction
- Requirements
- Installation
- Recommended modules
- Configuration


## INTRODUCTION

The Remote Feedback Form module generates a form adhering to YG guidelines. This webform is designed to connect to an external API, facilitating the transmission of emails to the respective departments through API integration.

The primary purpose of this module is to:

- **Build/Publish**:  Create a generic feedback form.
- **Collect**: Gather and transmit all comments to an API.

Goals:

- Present the standard styleable eServices feedback form.
- Safely transmit all submitted comments to the YG network instead of storing them, even temporarily, within the third-party cloud platform.


## REQUIREMENTS

This module depends on the following contributed modules:

  - Webform (https://www.drupal.org/project/webform): The Webform module allows you to build a form to collect data, which can be submitted to the YG API
  - Locale (Drupal core): this is what the translation of the form will generate
  - Fontawesome (https://www.drupal.org/project/fontawesome): This module will work with Font Awesome to add the icons 
  - Form Block(https://www.drupal.org/project/formblock): this will generate the block type Form.
  - YAML Content (https://www.drupal.org/project/yaml_content): This will create the block content Feedback form
  - Token (https://www.drupal.org/project/token)


## INSTALLATION

1. Download the module from GitLab.
2. Extract the module files into your Drupal modules directory (/modules/custom).
3. Enable the module through the Drupal administration interface or by using Drush: 
    ```
   drush pm-enable biz_feedback_form
    ```
5. Ensure that all required dependencies are installed and enabled. If not, download and enable them following the aforementioned process in step 3.
6. To generate the block content, run the following command. You will be able to view it in /admin/content/block
    ```
    drush yaml-content-import-module biz_feedback_form
    ```
7. One essential thing is that the module must have permission to update the variable.css file, as it is required for customizing CSS.

## CONFIGURATION

1. Verify that the block was created in Content -> Content blocks and search for "YG remote Feedback" (/admin/content/block).
2. To use the block's content, go to Structure -> Block layout. Look in the section where you want to display it, click on "Place block", and search for "YG remote Feedback". Configure it as required.
3. Set colors: 
   - To configure colors, go to Structure -> Webforms.
   - Look for the Feedback form, click to display the other options, and select "Settings".
   - In the "Third-party settings" section, you can locate the colors used by default. Modify them if required and click 'Save'.
   - Clear the cache to ensure the corresponding styles are applied after clicking the' Save' button.
4. Update remote post:
	 - To configure the remote post, go to Structure -> Webforms.
	 - Look for the Feedback form, click to display the other options, and select "Settings".
	 - Select the "Emails/Handlers" tab.
	 - Locate the remote post and click on "Edit".
	 - Modify the URL to which you want it to be directed. It must be an HTTPS URL.
	 - In the "Advanced" tab, you can change the messages to the ones you require.
