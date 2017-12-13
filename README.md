# webframwork
## koa2 + webpack + swig 的前后端cli 
## 

├─ config
│  ├─ htmlAfterWebpackPlugin.js
│  ├─ webpack.base.conf.js
│  └─ webpack.dev.conf.js
├─ docs
│
├─ logs
│  └─ logs.log
├─ src
│  ├─ nodeuii
│  │  ├─ config
│  │  │  ├─ config.js
│  │  │  └─ local.js
│  │  ├─ controllers
│  │  │  ├─ controllerInit.js
│  │  │  ├─ indexController.js
│  │  │  ├─ listController.js
│  │  │  └─ testController.js
│  │  ├─ middleware
│  │  │  └─ errorHandler.js
│  │  ├─ models
│  │  │  ├─ indexModel.js
│  │  │  ├─ listModel.js
│  │  │  └─ testModel.js
│  │  └─ app.js
│  └─ web
│     ├─ views
│     │  ├─ index
│     │  │  ├─ pages
│     │  │  │  └─ index.html
│     │  │  └─ index.entry.js
│     │  ├─ layout
│     │  │  ├─ pages
│     │  │  │  └─ layout.html
│     │  │  └─ layout.entry.js
│     │  └─ list
│     │     ├─ pages
│     │     │  └─ list.html
│     │     └─ list.entry.js
│     └─ widget
│        ├─ footer
│        │  ├─ footer.css
│        │  ├─ footer.html
│        │  └─ footer.js
│        ├─ header
│        │  ├─ header.css
│        │  ├─ header.html
│        │  └─ header.js
│        ├─ index
│        │  ├─ index.css
│        │  ├─ index.html
│        │  └─ index.js
│        └─ list
│           ├─ list.css
│           ├─ list.html
│           └─ list.js
├─ test
│  ├─ benchmark
│  │  └─ benchmark.js
│  └─ service
│     └─ index.spec.js
├─ .gitignore
├─ README.md
├─ cheese.log
├─ gulpfile.js
├─ package.json
├─ postcss.config.js
└─ yarn.lock