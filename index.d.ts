import { Component } from 'react';
import ReactNative from 'react-native';
import { WebViewMessage } from 'react-native-webview/lib/WebViewTypes';
interface PropTypes {
    readonly style?: ReactNative.StyleProp<ReactNative.ViewStyle>;
    /**
     * the doc URI to load in the WebView. Can be a local or remote file.
     */
    readonly source: string;
    /**
     * the reference for Webview
     */
    readonly webRef: ((_?: any) => void) | undefined;
    /**
     * Function that is invoked when the webview calls `window.ReactNativeWebView.postMessage`. Setting this property will inject this global into your webview.
     */
    readonly onMessage?: ((event: ReactNative.NativeSyntheticEvent<WebViewMessage>) => void) | undefined;
    /**
     * Set this to provide JavaScript that will be injected into the web page when the view loads.
     */
    readonly injectedJavaScript?: string | undefined;
    /**
     * the service for online doc view
     */
    readonly service: 'microsoft' | 'google';
    /**
     * the mode for microsoft service(default 'pc')
     */
    readonly mode?: 'pc' | 'mobile';
}
declare class DocumentViewer extends Component<PropTypes, {}> {
    static defaultProps: {
        service: string;
        mode: string;
    };
    render(): JSX.Element;
}
export { DocumentViewer };
export default DocumentViewer;
