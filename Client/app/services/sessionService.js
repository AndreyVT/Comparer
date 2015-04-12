/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 04.04.15
 * Time: 17:29
 * To change this template use File | Settings | File Templates.
 */
mainModule.service('Session', function () {
    this.create = function (sessionId, userId, userRole) {
        this.id = sessionId;
        this.userId = userId;
        this.userRole = userRole;
    };
    this.destroy = function () {
        this.id = null;
        this.userId = null;
        this.userRole = null;
    };
})
