# iLost
The lost item tracking helper

## Directories

* `/documents`: The reports for each week progress.
* `/proposal`: Paragraphs for each section of our first report
* `/src`: software/hardwares source code.
* `/presentations`: Slides for the presentation in March.
* `/final-report`: Paragraphs for the final report.

## Work Flow

### 1. Create a new issue and assign it to corresponding milestone / project or attach label.

### 2. Create a new aranch based on that issue.
Always create a new branch for any changes to the codebase. Once your branch has been reviewed and approved, a script takes care of merging it back into master.
Name branches with the follow conventions:
* New Features - feat-[TITLE] (Ex. feat-new-homepage)
* Bugs - issue-[NUMBER]-fix (Ex. issue-22-fix)

### 3. Modify codes and commit and push to origin.
use well structured and descriptive commit messages to explain our changes. You can use the follow template:

```
[TYPE]: [SUBJECT LINE]

[DESCRIPTION]

Closes #[ISSUE NUMBER]
```

e.g. 
```
Fix: Added missing header

The app header was deleted accidently, added it back.

Closes #123
```

* Type
  * The type indicates what kind of commit this is. 
  * Valid values are "Fix", "Feature", and "Refactor". 
  * The type is followed immediately by a colon and the subject.
* Subject Line
  * This should briefly describe your changes. 
  * The Type and Subject Line combined should be less than 50 characters.
* Description
  * A paragraph describing the change, why it was necessary, and how it was implemented.
  * A good description should mention the classes and modules that were changed.
  * Wrap lines at 72 characters.
* Issue Number
  * The ticket number that this commit is related to. 
  * The number should be preceded by the phrase "Closes #".


### 4. Make a pull request.
### 5. After the code is reviews then it will be merged to the master.

## [Progress Tracking Form](https://docs.google.com/spreadsheets/d/1bZfWHOaO0iySMuEhmCY6ehWJjtPB41waFdp_cGLxu9o/edit#gid=897286464)
Don't forget to record your effort ;)


