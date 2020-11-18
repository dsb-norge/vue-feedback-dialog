# vue-feedback-dialog
Feedback dialog for Vue/Vuetify<br>

<img src="https://img.shields.io/badge/license-MIT-green.svg" /> <img src="https://img.shields.io/badge/dependencies-0-brightgreen.svg" />

## Demo
#### Icon (right bottom corner fixed):
![alt text](https://github.com/dsb-norge/vue-feedback-dialog/blob/master/demo/dialog_icon.PNG)

#### Info screen:
![alt text](https://github.com/dsb-norge/vue-feedback-dialog/blob/master/demo/dialog_info.PNG)

#### Input screen:
![alt text](https://github.com/dsb-norge/vue-feedback-dialog/blob/master/demo/dialog_input.PNG)

## Install

1. Install Vuetify
[See documentation](https://vuetifyjs.com/en/getting-started/quick-start)

2. Install component:
```bash
npm install @dsb-norge/vue-feedback-dialog --save
```

## Usage

### Setup
Import in component (or use global):
```javascript
import VueFeedbackDialog from '@dsb-norge/vue-feedback-dialog'

components: {
    VueFeedbackDialog
}

<VueFeedbackDialog
    :messages="messages"
    :options="options"
    @feedback="handleFeedback"
/>

```

### Messages format: (optional)

```javascript
      messages: [
        {
          header: 'Maintenance 23.02.20', (h5)
          info: 'Describing text' (p)
        },
        {
          header: 'Down time 10.05.20', (h5)
          info: 'Describing text' (p)
        }
      ]

```

### Options format: (optional)

```javascript
    defaultOptions: {
        text: {
            headerInfo: 'Information: ',
            headerDialog: 'Report error or suggestion: ',
            dialogLeftControlText: 'Back',
            infoLeftControlText: 'Close',
            dialogRightControlText: 'Send',
            infoRightControlText: 'Report bug',
            reporter: 'Reporter',
            reporterError: 'This field is required',
            description: 'Description...',
            descriptionError: 'This field is required',
            email: 'Email',
            emailError: 'Invalid email address'
        },
        layout: {
            color: '#34495e',
            border: '#34495e',
            background: '#FFF'
        }
    }
```

#### Options

| Name                  | Type      | Default |
| ---                   | ---       | --- |
| headerInfo            | String    | Information: (h4) |
| headerDialog          | String    | Report error or suggestion: (h4) |
| dialogLeftControlText | String    | Back |
| infoLeftControlText   | String    | Close |
| dialogRightControlText| String    | Send |
| infoRightControlText  | String    | Report bug |
| reporter              | String    | Reporter |
| reporterError         | String    | This field is required |
| description           | String    | Description... |
| descriptionError      | String    | This field is required |
| email                 | String    | Email |
| emailError            | String    | Invalid email address |
| color                 | String    | #34495e |
| border                | String    | #34495e |
| background            | String    | #FFF  |

#### Events

| Name   | Description              |
| ---    | ---                      |
| feedback | Triggered on send, user click send on input form |

Value in feedback event:
```javascript
    {
        reporter: this.reporter,
        description: this.description,
        path: window.location.href,
        email: this.email
    }
```

### Feedback only mode
If no messages is provided only the feedback form will be visible.

## Build:

### Compile and build for production
```
npm run build
```

### Publish to NPM
```
# Do some work...

# x.x.1 -> x.x.2
npm version patch

# x.1.0 -> x.2.0
npm version minor

# 1.0.0 -> 2.0.0
npm version major

```

All these will:
1. Set the version number in `package.json` 
1. Build the plugin
1. Commit version to git and push upstream
1. Publish the plugin to NPM registry
