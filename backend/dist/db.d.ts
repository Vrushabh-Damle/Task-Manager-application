import mongoose, { Types } from "mongoose";
export declare const taskModel: mongoose.Model<{
    title: string;
    completed: boolean;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    title: string;
    completed: boolean;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title: string;
    completed: boolean;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
    completed: boolean;
}, mongoose.Document<unknown, {}, {
    title: string;
    completed: boolean;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title: string;
    completed: boolean;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        title: string;
        completed: boolean;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        title: string;
        completed: boolean;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    title: string;
    completed: boolean;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    title: string;
    completed: boolean;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map