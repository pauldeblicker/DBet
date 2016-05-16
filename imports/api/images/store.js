import { UploadFS } from 'meteor/jalik:ufs';
import { Images, Thumbs } from './collection';

export const ThumbsStore = new UploadFS.store.GridFS({
    collection: Thumbs,
    name: 'thumbs',
    transformWrite(from, to, fileId, file) {
        const gm = require('gm');

        gm(from, file.name)
            .resize(32, 32)
            .gravity('Center')
            .extent(32, 32)
            .quality(75)
            .stream()
            .pipe(to);
    }
});

export const ImagesStore = new UploadFS.store.GridFS({
    collection: Images,
    name: 'images',
    path: '/uploads/images',
    filter: new UploadFS.Filter({
        contentTypes: ['image/*']
    }),
    copyTo: [
        ThumbsStore
    ]
});
