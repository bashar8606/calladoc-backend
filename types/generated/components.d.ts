import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContactCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_cards';
  info: {
    displayName: 'ContactCard';
  };
  attributes: {
    description: Schema.Attribute.String;
    items: Schema.Attribute.Component<'shared.contact-list-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_list_items';
  info: {
    displayName: 'ContactListItem';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<['phone', 'mail', 'location']>;
    value: Schema.Attribute.String;
  };
}

export interface SharedContentItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_content_items';
  info: {
    displayName: 'ContentItem';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    titleMain: Schema.Attribute.String;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    link: Schema.Attribute.Component<'shared.sub-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    sub: Schema.Attribute.Component<'shared.sub-drop', true>;
    url: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPackageItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_package_items';
  info: {
    displayName: 'PackageItem';
  };
  attributes: {
    avail: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    items: Schema.Attribute.Component<'shared.point', true>;
    note: Schema.Attribute.Text;
    price: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface SharedPoint extends Struct.ComponentSchema {
  collectionName: 'components_shared_points';
  info: {
    displayName: 'point';
  };
  attributes: {
    title: Schema.Attribute.Text;
    type: Schema.Attribute.Enumeration<['neutral', 'positive', 'negative']>;
  };
}

export interface SharedPriceCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_price_cards';
  info: {
    displayName: 'PriceCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    items: Schema.Attribute.Component<'shared.text-item', true>;
    price: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSubDrop extends Struct.ComponentSchema {
  collectionName: 'components_shared_sub_drops';
  info: {
    displayName: 'subDrop';
  };
  attributes: {
    label: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.sub-link', true>;
    url: Schema.Attribute.String;
  };
}

export interface SharedSubLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_sub_links';
  info: {
    displayName: 'subLink';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    description: Schema.Attribute.Text;
    designation: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    rating: Schema.Attribute.String;
  };
}

export interface SharedTextItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_items';
  info: {
    displayName: 'TextItem';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface WidgetsBlogListing extends Struct.ComponentSchema {
  collectionName: 'components_widgets_blog_listings';
  info: {
    description: 'BlogListing widget component for displaying blog posts in a grid format';
    displayName: 'BlogListing';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    loadMoreText: Schema.Attribute.String;
    showLoadMore: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WidgetsCeoMessage extends Struct.ComponentSchema {
  collectionName: 'components_widgets_ceo_messages';
  info: {
    description: 'CeoMessage widget component';
    displayName: 'CeoMessage';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    designation: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WidgetsContactBanner extends Struct.ComponentSchema {
  collectionName: 'components_widgets_contact_banners';
  info: {
    description: 'ContactBanner widget component';
    displayName: 'ContactBanner';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'shared.contact-card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleMain: Schema.Attribute.String;
  };
}

export interface WidgetsContactDetails extends Struct.ComponentSchema {
  collectionName: 'components_widgets_contact_details';
  info: {
    description: 'ContactDetails widget component';
    displayName: 'ContactDetails';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'shared.contact-card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WidgetsContentSec extends Struct.ComponentSchema {
  collectionName: 'components_widgets_content-secs';
  info: {
    description: 'ContentSec widget component.';
    displayName: 'ContentSec';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'shared.content-item', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface WidgetsCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_widgets_cta-sections';
  info: {
    description: 'CtaSection widget component.';
    displayName: 'CtaSection';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.sub-link', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface WidgetsDetailWidget extends Struct.ComponentSchema {
  collectionName: 'components_widgets_detail-widgets';
  info: {
    description: 'DetailWidget widget component.';
    displayName: 'DetailWidget';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    description: Schema.Attribute.Text;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface WidgetsDoctorsContent extends Struct.ComponentSchema {
  collectionName: 'components_widgets_doctors-contents';
  info: {
    description: 'DoctorsContent widget component.';
    displayName: 'DoctorsContent';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Relation<'oneToMany', 'api::doctor.doctor'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    titleMain: Schema.Attribute.String;
  };
}

export interface WidgetsDoctorsDetail extends Struct.ComponentSchema {
  collectionName: 'components_widgets_doctors-details';
  info: {
    description: 'DoctorsDetail widget component.';
    displayName: 'DoctorsDetail';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    description: Schema.Attribute.Text;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface WidgetsDoctorsSingleBanner extends Struct.ComponentSchema {
  collectionName: 'components_widgets_doctors-single-banners';
  info: {
    description: 'DoctorsSingleBanner widget component.';
    displayName: 'DoctorsSingleBanner';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    description: Schema.Attribute.Text;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface WidgetsFeaturedBlogs extends Struct.ComponentSchema {
  collectionName: 'components_widgets_featured_blogs';
  info: {
    description: 'FeaturedBlogs widget component for highlighting featured blog posts';
    displayName: 'FeaturedBlogs';
  };
  attributes: {
    latest: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    popular: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleMain: Schema.Attribute.String;
  };
}

export interface WidgetsHomeAbout extends Struct.ComponentSchema {
  collectionName: 'components_widgets_home_abouts';
  info: {
    description: 'HomeAbout widget component';
    displayName: 'HomeAbout';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.sub-link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WidgetsHomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_widgets_home_banners';
  info: {
    displayName: 'HomeBanner';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'shared.sub-link', false>;
    title: Schema.Attribute.String;
  };
}

export interface WidgetsHomeBlogs extends Struct.ComponentSchema {
  collectionName: 'components_widgets_home_blogs';
  info: {
    description: 'HomeBlogs widget component';
    displayName: 'HomeBlogs';
  };
  attributes: {
    items: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    link: Schema.Attribute.Component<'shared.sub-link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleMain: Schema.Attribute.String;
  };
}

export interface WidgetsHomeChoose extends Struct.ComponentSchema {
  collectionName: 'components_widgets_home_chooses';
  info: {
    description: 'HomeChoose widget component';
    displayName: 'HomeChoose';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'shared.card', true>;
    link: Schema.Attribute.Component<'shared.sub-link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleMain: Schema.Attribute.String;
  };
}

export interface WidgetsHomeClients extends Struct.ComponentSchema {
  collectionName: 'components_widgets_home-clientss';
  info: {
    description: 'HomeClients widget component.';
    displayName: 'HomeClients';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    description: Schema.Attribute.Text;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface WidgetsHomeDoctors extends Struct.ComponentSchema {
  collectionName: 'components_widgets_home_doctors';
  info: {
    description: 'HomeDoctors widget component';
    displayName: 'HomeDoctors';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Relation<'oneToMany', 'api::doctor.doctor'>;
    link: Schema.Attribute.Component<'shared.sub-link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleSm: Schema.Attribute.String;
  };
}

export interface WidgetsHomeFaq extends Struct.ComponentSchema {
  collectionName: 'components_widgets_home_faqs';
  info: {
    description: 'HomeFaq widget component';
    displayName: 'HomeFaq';
  };
  attributes: {
    items: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleMain: Schema.Attribute.String;
  };
}

export interface WidgetsHomeServices extends Struct.ComponentSchema {
  collectionName: 'components_widgets_home_services';
  info: {
    description: 'HomeServices widget component';
    displayName: 'HomeServices';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    link: Schema.Attribute.Component<'shared.sub-link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleMain: Schema.Attribute.String;
  };
}

export interface WidgetsHomeSpec extends Struct.ComponentSchema {
  collectionName: 'components_widgets_home_specs';
  info: {
    description: 'HomeSpec widget component';
    displayName: 'HomeSpec';
  };
  attributes: {
    description: Schema.Attribute.Text;
    hasBg: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    items: Schema.Attribute.Component<'shared.card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleMain: Schema.Attribute.String;
  };
}

export interface WidgetsHomeStat extends Struct.ComponentSchema {
  collectionName: 'components_widgets_home_stats';
  info: {
    description: 'HomeStat widget component';
    displayName: 'HomeStat';
  };
  attributes: {
    hasBg: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    items: Schema.Attribute.Component<'shared.card', true>;
    title: Schema.Attribute.String;
  };
}

export interface WidgetsHomeTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_widgets_home-testimonialss';
  info: {
    description: 'HomeTestimonials widget component.';
    displayName: 'HomeTestimonials';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    titleMain: Schema.Attribute.String;
  };
}

export interface WidgetsInnerBanner extends Struct.ComponentSchema {
  collectionName: 'components_widgets_inner_banners';
  info: {
    description: 'InnerBanner widget component for inner page banners';
    displayName: 'InnerBanner';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleMain: Schema.Attribute.String;
  };
}

export interface WidgetsPackageListing extends Struct.ComponentSchema {
  collectionName: 'components_widgets_package_listings';
  info: {
    description: 'PackageListing widget component';
    displayName: 'PackageListing';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Relation<'oneToMany', 'api::package.package'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleMain: Schema.Attribute.String;
  };
}

export interface WidgetsPackageWidget extends Struct.ComponentSchema {
  collectionName: 'components_widgets_package-widgets';
  info: {
    description: 'PackageWidget widget component.';
    displayName: 'PackageWidget';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'shared.package-item', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface WidgetsServiceAbout extends Struct.ComponentSchema {
  collectionName: 'components_widgets_service-abouts';
  info: {
    description: 'ServiceAbout widget component.';
    displayName: 'ServiceAbout';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface WidgetsServiceBanner extends Struct.ComponentSchema {
  collectionName: 'components_widgets_service-banners';
  info: {
    description: 'ServiceBanner widget component.';
    displayName: 'ServiceBanner';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface WidgetsServiceListing extends Struct.ComponentSchema {
  collectionName: 'components_widgets_service_listings';
  info: {
    description: 'ServiceListing widget component';
    displayName: 'ServiceListing';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleMain: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.card': SharedCard;
      'shared.contact-card': SharedContactCard;
      'shared.contact-list-item': SharedContactListItem;
      'shared.content-item': SharedContentItem;
      'shared.footer': SharedFooter;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.package-item': SharedPackageItem;
      'shared.point': SharedPoint;
      'shared.price-card': SharedPriceCard;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.sub-drop': SharedSubDrop;
      'shared.sub-link': SharedSubLink;
      'shared.testimonial': SharedTestimonial;
      'shared.text-item': SharedTextItem;
      'widgets.blog-listing': WidgetsBlogListing;
      'widgets.ceo-message': WidgetsCeoMessage;
      'widgets.contact-banner': WidgetsContactBanner;
      'widgets.contact-details': WidgetsContactDetails;
      'widgets.content-sec': WidgetsContentSec;
      'widgets.cta-section': WidgetsCtaSection;
      'widgets.detail-widget': WidgetsDetailWidget;
      'widgets.doctors-content': WidgetsDoctorsContent;
      'widgets.doctors-detail': WidgetsDoctorsDetail;
      'widgets.doctors-single-banner': WidgetsDoctorsSingleBanner;
      'widgets.featured-blogs': WidgetsFeaturedBlogs;
      'widgets.home-about': WidgetsHomeAbout;
      'widgets.home-banner': WidgetsHomeBanner;
      'widgets.home-blogs': WidgetsHomeBlogs;
      'widgets.home-choose': WidgetsHomeChoose;
      'widgets.home-clients': WidgetsHomeClients;
      'widgets.home-doctors': WidgetsHomeDoctors;
      'widgets.home-faq': WidgetsHomeFaq;
      'widgets.home-services': WidgetsHomeServices;
      'widgets.home-spec': WidgetsHomeSpec;
      'widgets.home-stat': WidgetsHomeStat;
      'widgets.home-testimonials': WidgetsHomeTestimonials;
      'widgets.inner-banner': WidgetsInnerBanner;
      'widgets.package-listing': WidgetsPackageListing;
      'widgets.package-widget': WidgetsPackageWidget;
      'widgets.service-about': WidgetsServiceAbout;
      'widgets.service-banner': WidgetsServiceBanner;
      'widgets.service-listing': WidgetsServiceListing;
    }
  }
}
