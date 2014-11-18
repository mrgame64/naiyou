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

GLOBAL.CommentSchema = new Schema({
    userId:         { type: ObjectId, required: true },
    date:           { type: Number, required: true },
    entryId:        { type: ObjectId, required: true },
    inReply:        { type: ObjectId },
    
    approved:       { type: Boolean, required: true },
    removed:        { type: Boolean, required: true },
    rmvBy:          { type: ObjectId },
    rmvDate:        { type: Number },
    
    content:        { type: String, required: true, trim: true }
});

GLOBAL.Comment = mongoose.model('Comment', CommentSchema);
