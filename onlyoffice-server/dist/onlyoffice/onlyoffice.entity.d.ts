declare class IFeatures {
    spellcheck?: boolean;
}
declare class ICustomization {
    forcesave?: boolean;
    features?: IFeatures;
}
declare class IPlugins {
    autostart: string[];
    pluginsData: string[];
}
declare class IPermission {
    comment?: boolean;
    download?: boolean;
    edit?: boolean;
    print?: boolean;
    review?: boolean;
}
declare class IDocument {
    fileType: string;
    key: string;
    url: string;
    title: string;
    permissions: IPermission;
}
declare class IEditorConfig {
    callbackUrl: string;
    lang?: string;
    user: object;
    templates?: object[];
    customization?: ICustomization;
    plugins?: IPlugins;
}
export declare class OnlyofficeCallback {
    error: number;
}
export declare class OnlyofficeForceSave {
    code: number;
    error: number;
    message?: string;
}
export declare class OnlyofficeEditorConfig {
    width?: number | string;
    height?: number | string;
    documentType: string;
    document: IDocument;
    editorConfig: IEditorConfig;
    token?: string;
}
export {};
