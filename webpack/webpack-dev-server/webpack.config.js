const path = require('path');
const webpack = require('webpack');
module.exports = {
	entry:path.resolve(__dirname,'src/index.js'),
	output:{ 
		path:path.resolve(__dirname),
		filename:"bundle.js",
	},
	devServer:{
		//Provides the ability to execute custom middleware after all other middleware internally within the server.
		after(app){
			// console.log(app)
		},
		
		//This option allows you to whitelist services that are allowed to access the dev server.
		allowedHosts:[
		],
		
		//Provides the ability to execute custom middleware prior to all other middleware internally within the server. This could be used to define custom handlers
		before(app){
		},

		// When using inline mode, the console in your DevTools will show you messages e.g. before reloading, before an error or when Hot Module Replacement is enabled. This may be too verbose
		// none/error/warning/info(default)
		clientLogLevel:"none",

		// Enable gzip compression for everything served
		compress:true,
		// Tell the server where to serve content from. This is only necessary if you want to serve static files. devServer.publicPath will be used to determine where the bundles should be served from, and takes precedence.
		// By default it will use your current working directory to serve content, but you can modify this to another directory:
		// contentBase:"",

		/*
			lazy:true,
			filename:"bundle.js",
		*/

		// adds headers to all responses
		headers: {
			"x-custom-foo":"bar"
		},

		// When using the HTML5 History API, the index.html page will likely have to be served in place of any 404 responses. Enable this by passing:
		historyApiFallback:true,

		// Specify a host to use. By default this is localhost. If you want your server to be accessible externally, specify it like this:
		// host:"1,2,3,4",

		// Enable webpack's Hot Module Replacement feature
		hot:true,

		/*
			// Enables Hot Module Replacement (see devServer.hot) without page refresh as fallback in case of build failures.
			hotOnly:true,
		*/

		/*
			// by default dev-server will be served over HTTP. it can optionally be served over HTTP/2 with https
			https: {
			  key: fs.readFileSync("/path/to/server.key"),
			  cert: fs.readFileSync("/path/to/server.crt"),
			  ca: fs.readFileSync("/path/to/ca.pem"),
			}
		*/

		// oggle between the dev-server's two different modes. By default the application will be served with inline mode enabled. This means that a script will be inserted in your bundle to take care of live reloading, and build messages will appear in the browser console.
		inline:true,

		// With noInfo enabled, messages like the webpack bundle information that is shown when starting up and after each save, will be hidden. Errors and warnings will still be shown.
		noInfo:true,

		// When open is enabled, the dev server will open the browser.
		open:true,

		/*
			// specify a page to navigate to when opening the browser
			openPage:"/differerent/page"
		*/

		/*
			// Shows a full-screen overlay in the browser when there are compiler errors or warnings. Disabled by default. If you want to show only compiler errors:
			overlay: {
				warnings: true,
				errors: true
			}			
		*/

		// Specify a port number to listen for requests on:
		port:8088,

		// Proxying some URLs can be useful when you have a separate API backend development server and you want to send API requests on the same domain.
		proxy: {
			"/user": {
				target:"http://localhost:3000",
				secure:false,
				pathRewrite: {
					"^/api" : ""
				}
			}
		},

		// When using inline mode and you're proxying dev-server, the inline client script does not always know where to connect to. It will try to guess the URL of the server based on window.location, but if that fails you'll need to use this.
		/*
			public: "myapp.test:80"
		*/		

		/*
			The bundled files will be available in the browser under this path.
			Imagine that the server is running under http://localhost:8080 and output.filename is set to bundle.js. By default the publicPath is "/", so your bundle is available as http://localhost:8080/bundle.js.
			The publicPath can be changed so the bundle is put in a directory:
		*/ 
		// publicPath: "/my",

		// With quiet enabled, nothing except the initial startup information will be written to the console. This also means that errors or warnings from webpack are not visible.
		quiet: true,

		// The Unix socket to listen to (instead of a host)
		// socket:"socket"

		// It is possible to configure advanced options for serving static files from contentBase. See the Express documentation for the possible options. 
		staticOptions: {

		},	

		// This option lets you precisely control what bundle information gets displayed. This can be a nice middle ground if you want some bundle information, but not all of it.To show only errors in your bundle:
		// This option has no effect when used with quiet or noInfo.
		stats:"errors-only"
	},
	module:{
		loaders:[
			{
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}