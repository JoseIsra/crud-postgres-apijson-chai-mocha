function NotFoundError(req, res , next){
    let err = new Error('No Encontrado');
    err.status = 404;
    next(err);
    }
    
function errorHandler(err, req, res, next){
        res.status(err.status || 500);
        res.json({
            message:err.message,
            error:req.app.get('env') === 'development' ?err : {}
        })
    
    }


    module.exports = {
        NotFoundError,
        errorHandler
    }