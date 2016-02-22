import { extend } from 'flarum/extend';
import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';

import AnalyticsPage from 'flagrow/analytics/components/AnalyticsPage';

export default function() {
    if(m.prop(app.settings['flagrow.analytics.statusPiwik'])() &&
        m.prop(app.settings['flagrow.analytics.piwikUrl'])() &&
        m.prop(app.settings['flagrow.analytics.piwikSiteId'])() &&
        m.prop(app.settings['flagrow.analytics.piwikAuthToken'])()){

        app.routes['analytics'] = {path: '/analytics', component: AnalyticsPage.component()};

        extend(AdminNav.prototype, 'items', items => {
            // add the Analytics tab to the admin navigation menu
            items.add('analytics', AdminLinkButton.component({
                href: app.route('analytics'),
                icon: 'line-chart',
                children: app.translator.trans('flagrow-analytics.admin.page.nav.title'),
                description: app.translator.trans('flagrow-analytics.admin.page.nav.description')
            }));
        });
    }
}