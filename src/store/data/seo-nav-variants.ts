import rootDomain from '@store/root-domain';
import API from '@services/API';

const getSeoNavVariantsFx = rootDomain.createEffect({
  handler: async () => {
    // console.log('1. REQUEST SEO NAV VARIANTS', result);
    return API.get();
  },
});

const $seoNavVariants = rootDomain.createStore([]).on(getSeoNavVariantsFx.doneData, (_, data) => {
  // console.log('2. SEO NAV VARIANTS', { data });
  return data;
});

export { $seoNavVariants, getSeoNavVariantsFx };
