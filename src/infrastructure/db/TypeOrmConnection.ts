import typeOrmConfig from "../../config/TypeOrmConfig";
import { DataSource } from "typeorm";


export class TypeOrmConnection {
    
    private _dataSource: DataSource

    constructor() {
        this._dataSource = new DataSource(typeOrmConfig)
    }

    connect(): void {
        this.dataSource.initialize()
            .then(async (ds) => {
                console.log("Data Source has been initialized!")
            }).catch((error) => {
                console.log(error)
            })
    }

    get dataSource(): DataSource {
        return this._dataSource
    }
}