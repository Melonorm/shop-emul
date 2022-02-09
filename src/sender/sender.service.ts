import {HttpException, HttpService, HttpStatus, Injectable} from '@nestjs/common';
import {FirstOutputCredentialsInterface} from "./types/firstOutputCredentials.interface";
import {AppCodeFromTelegramInterface} from "./types/appCodeFromTelegram.interface";

@Injectable()
export class SenderService {
    mockFirstData: FirstOutputCredentialsInterface = {
        userId: 1,
        phone: '+380667376943'
    }

    mockAppCode: AppCodeFromTelegramInterface = {code: 1234};

    constructor(private readonly httpService: HttpService) {
    }

    async sendFirstDataToBack(data: FirstOutputCredentialsInterface): Promise<FirstOutputCredentialsInterface> {
        return data;
    }

    async getAppCodeFromTelegram(): Promise<AppCodeFromTelegramInterface> {
        const resp = await this.httpService.post('http://localhost:3300/bot-father-emul/sendAppCodeToShop').toPromise();
        const code: number = resp.data;
        const appCode: AppCodeFromTelegramInterface = {code};
        console.log('Получил от ТЕЛЕГРАММА: ');
        console.log(`appCode `, appCode);

        return appCode;
    }

    async sendAppCodeToBack(appCodeFromTelegram: AppCodeFromTelegramInterface): Promise<AppCodeFromTelegramInterface> {
        if (appCodeFromTelegram !== this.mockAppCode) {
            throw new HttpException("Попытка отправить невалидный аппКод!", HttpStatus.BAD_REQUEST);
        }
        console.log(`Отправка на БЭК appCode: ${this.mockAppCode}`);
        return this.mockAppCode;
    }


    async sendPhoneNumber(): Promise<string> {
        const readLineSync = require('readline-sync');
        let phone = readLineSync.question('please type phone number: ');
        console.log(`typed ${phone}`);
        return phone;
    }


    async sendAuthCode(): Promise<string> {
        const readLineSync = require('readline-sync');
        let accessCode: string = readLineSync.question('please type auth code: ');
        console.log(`typed ${accessCode}`);
        return accessCode;
    }


}

