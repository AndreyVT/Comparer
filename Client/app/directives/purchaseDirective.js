/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 12.03.15
 * Time: 21:06
 * To change this template use File | Settings | File Templates.
 */

mainModule.directive('cmprPurchase', function() {
    return {
        restrict: 'E',
        scope: {
            purchaseInfo: '=purchase'
        },
        templateUrl: 'app/directives/purchaseTemplate.html'

    };
})