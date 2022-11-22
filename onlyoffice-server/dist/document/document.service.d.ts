import { ConfigService } from '@nestjs/config';
import { OnlyofficeService } from '../onlyoffice/onlyoffice.service';
import { DocumentForceSaveDto, DocumentInfoDto } from './document.dto';
import { DocumentForceSave, DocumentInfo } from './document.entity';
export declare class DocumentService {
    private readonly config;
    private onlyofficeService;
    constructor(config: ConfigService, onlyofficeService: OnlyofficeService);
    forceSave(body: DocumentForceSaveDto): Promise<DocumentForceSave>;
    documentInfo(query: DocumentInfoDto): Promise<DocumentInfo>;
    excelInfo(query: DocumentInfoDto): Promise<DocumentInfo>;
}
