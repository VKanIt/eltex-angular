import { Injectable } from "@angular/core";
import { IStorageService } from "./storage-service.interface";

@Injectable()
export class StorageService implements IStorageService {
    public loadInStorage(storage: string, isLength: boolean = false): any[] {
        const tmp = localStorage.getItem(storage);

        let data = [];
        if (tmp !== null && tmp !== '') {
            data = JSON.parse(tmp);

            if (!isLength) {
                data.map((item: any) => {
                    item.date = new Date(item.date);
                });

                data.sort((a: any, b: any) => b.date.getTime() - a.date.getTime());
            }
        }

        return data;
    }
}