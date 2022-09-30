import { DataSourceOptions } from "typeorm";
import { VideoHistory } from "../domain/model/VideoHistory";

const typeOrmConfig: DataSourceOptions = {
    type: "mariadb",
    host: "localhost",
    username: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASS,
    port: 3306,
    logging: true,
    database: "adjustimer_history",
    synchronize: true,
    dropSchema: false,
    entities: [VideoHistory]
}

export default typeOrmConfig