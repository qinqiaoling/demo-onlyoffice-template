import { DocumentForceSaveDto, DocumentInfoDto } from './document.dto';
import { DocumentInfo } from './document.entity';
import { DocumentService } from './document.service';
export declare class DocumentController {
    private documentService;
    constructor(documentService: DocumentService);
    forceSave(body: DocumentForceSaveDto): Promise<any>;
    documentInfo(query: DocumentInfoDto): Promise<DocumentInfo>;
    excelInfo(query: DocumentInfoDto): Promise<DocumentInfo>;
}
