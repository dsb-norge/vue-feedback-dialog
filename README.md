# vue-feedback-dialog
Feedback dialog for Vue/Vuetify<br>
v0.1.4

<img src="https://img.shields.io/badge/license-MIT-green.svg" /> <img src="https://img.shields.io/badge/dependencies-0-brightgreen.svg" />

## Install

1. Install Vuetify
[See documentation](https://vuetifyjs.com/en/getting-started/quick-start)

2. Install component:
```bash
npm install vue-feedback-dialog --save
```

## Usage

### Setup
Import in component (or use global):
```javascript
import VueFeedbackDialog from 'vue-feedback-dialog'

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
            name: 'Name',
            nameError: 'This field is required',
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
| name                  | String    | Name |
| nameError             | String    | This field is required |
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
        name: this.name,
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
npm publish
```

## Todo 📌  
* Publish to @dsb-norge/vue-feedback-dialog (pending access)
