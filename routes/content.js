GLOBAL.PostSchema = new Schema({
    id:           { type: Number, required: true, unique: true },
    page:         { type: Boolean, required: true},
    tags:         [{ type: String, trim: true }],
    categories:   [{ type: String, trim: true }],
    title:        { type: String, required: true, trim: true },
    file:         { type: String, required: true, trim: true },
    creationDate: { type: Number, required: true },
    editDate:     { type: Number, required: true }
});

GLOBAL.Post = mongoose.model('Post', PostSchema);

exports.api = function(){
    
};
