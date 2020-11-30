import { combine } from 'effector';
import rootDomain from '@store/root-domain';
import { $currency,
} from '@store/data/currency';
import { $seoNavVariants, getSeoNavVariantsFx } from '@store/data/seo-nav-variants';

export const getCommonDataFx = rootDomain.createEffect({
  async handler() {
    return Promise.all([getSeoNavVariantsFx()]);
  },
});
export const $commonData = combine({
  currency: $currency,
  seoNavVariants: $seoNavVariants,
});

export const $categoriesSeoNavVariant = $commonData.map(({ seoNavVariants }) => {
  console.log('categories', { seoNavVariants });
  return seoNavVariants.find((item) => item.key === 'categories') || null;
});
