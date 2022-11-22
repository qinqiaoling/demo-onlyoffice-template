import { OnlyofficeEditorConfig } from '../onlyoffice/onlyoffice.entity';
export declare class DocumentInfo {
    id?: number;
    remarks?: string;
    editorConfig: OnlyofficeEditorConfig;
}
export declare class DocumentForceSave {
    code: number;
    message?: string;
}
