"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const department_entity_1 = require("./departments/entities/department.entity");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const accounts_module_1 = require("./accounts/accounts.module");
const account_entity_1 = require("./accounts/entities/account.entity");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const departments_module_1 = require("./departments/departments.module");
const designations_module_1 = require("./designations/designations.module");
const designation_entity_1 = require("./designations/entities/designation.entity");
const employees_module_1 = require("./employees/employees.module");
const employee_entity_1 = require("./employees/entities/employee.entity");
const holiday_entity_1 = require("./holidays/entities/holiday.entity");
const holidays_module_1 = require("./holidays/holidays.module");
const role_entity_1 = require("./roles/entities/role.entity");
const roles_module_1 = require("./roles/roles.module");
const user_entity_1 = require("./users/user.entity");
const users_module_1 = require("./users/users.module");
const entities = [
    user_entity_1.User,
    role_entity_1.Role,
    holiday_entity_1.Holiday,
    designation_entity_1.Designation,
    account_entity_1.Account,
    employee_entity_1.Employee,
    department_entity_1.Department,
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: process.env.DB_TYPE,
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: entities,
                synchronize: true,
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            roles_module_1.RolesModule,
            holidays_module_1.HolidaysModule,
            designations_module_1.DesignationsModule,
            departments_module_1.DepartmentsModule,
            accounts_module_1.AccountsModule,
            employees_module_1.EmployeesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map