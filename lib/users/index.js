var express  = require('express');
var router   = express.Router();
var passport = require('passport');

require('./../../config/passport.js')(passport);  


router.get('/:id?', passport.authenticate('jwt', {session: false}), require('./services/find'));
router.post('/', require('./services/create'));
router.post('/authenticate', require('./services/authenticate'));


module.exports = router;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7InBhc3N3b3JkIjoiaW5pdCIsInJvbGUiOiJpbml0IiwiX192IjoiaW5pdCIsImVtYWlsIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicm9sZSI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsImVtYWlsIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsicm9sZSI6IlVzZXIiLCJfX3YiOjAsInBhc3N3b3JkIjoiJDJhJDEwJHhadmRjbGdmV2ExdGtQSllWR2xCYy5naWNMamNQU0VrWDZ6T1NwR2g2UVMwWm5YbTE1WTFTIiwiZW1haWwiOiJoZWJlcnQiLCJfaWQiOiI1ODNhMjUxOWUzMGJmNDFkMDNhNWFhOGIifSwiX3ByZXMiOnsiJF9fb3JpZ2luYWxfc2F2ZSI6W251bGwsbnVsbCxudWxsXSwiJF9fb3JpZ2luYWxfdmFsaWRhdGUiOltudWxsXSwiJF9fb3JpZ2luYWxfcmVtb3ZlIjpbbnVsbF19LCJfcG9zdHMiOnsiJF9fb3JpZ2luYWxfc2F2ZSI6W10sIiRfX29yaWdpbmFsX3ZhbGlkYXRlIjpbXSwiJF9fb3JpZ2luYWxfcmVtb3ZlIjpbXX0sImlhdCI6MTQ4MDM3ODg2MywiZXhwIjoxNDgwMzg4OTQzfQ._T2fx7MtMI8MnPgF6N-sUX0T6Q2HmSAzgwNflpd39F4