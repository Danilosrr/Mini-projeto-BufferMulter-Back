import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, process.env.UPLOAD_PATH)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = '.png'
      cb(null, file.originalname + uniqueSuffix)
    }
})
const upload = multer({ storage: storage });

const multerMiddleware = upload.single('photo');

export default multerMiddleware;

/* example of file if filename is not defined:
file: {
    fieldname: 'photo',
    originalname: 'Imagem.png',
    encoding: '7bit',
    mimetype: 'image/png',
    destination: 'uploads/',
    filename: '2a9ea77e3999e88aff79cf56fa11cdcc' (random, no-extension),
    path: 'uploads/2a9ea77e3999e88aff79cf56fa11cdcc',
    size: 365631 (bytes)
}*/