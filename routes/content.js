GLOBAL.EntrySchema = new Schema({
    title:          { type: String, required: true, trim: true },
    date:           { type: Number, required: true },
    author:         { type: ObjectId, required: true},
    editDate:       { type: Number },
    editor:         { type: ObjectId }
    post:           {
        isPost: { type: Boolean, required: true},
        id: { type: Number, required: true, unique: true }
    },
    content:        { type: String, required: true, trim: true },
    tags:           [{ type: String, trim: true }],
    comments:       [{ type: ObjectId }]
});

GLOBAL.Entry = mongoose.model('Entry', EntrySchema);
