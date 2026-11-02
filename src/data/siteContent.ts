import type { IconType } from 'react-icons'
import {
  FiCheckCircle,
  FiDroplet,
  FiGlobe,
  FiHeart,
  FiLayers,
  FiShield,
  FiTag,
  FiTruck,
  FiZap,
} from 'react-icons/fi'
import { FaGlassWater, FaUtensils } from 'react-icons/fa6'
import { GiBreadSlice, GiCandyCanes, GiPill } from 'react-icons/gi'
import { LuMilk } from 'react-icons/lu'
import preservationSystemImage from '../assets/products/preservation system.png'
import caramelColourImage from '../assets/products/caramel-colour.png'
import citricAcidImage from '../assets/products/citric-acid.png'
import ascorbicAcidImage from '../assets/products/ascorbic-acid-vitamin-c.png'
import sodiumCitrateImage from '../assets/products/sodium-citrate.png'
import guarGumImage from '../assets/products/guar-gum.png'
import carrageenanImage from '../assets/products/carrageenan.png'
import monosodiumGlutamateImage from '../assets/products/monosodium-glutamate-msg.png'
import disodiumInosinateImage from '../assets/products/disodium-inosinate.png'
import disodiumGuanylateImage from '../assets/products/disodium-guanylate.png'
import sucraloseImage from '../assets/products/sucralose.png'
import steviolGlycosidesImage from '../assets/products/steviol-glycosides.png'
import carnaubaWaxImage from '../assets/products/carnauba-wax.png'
import sodiumAlginateImage from '../assets/products/sodium-alginate.png'
import xanthanGumImage from '../assets/products/xanthan-gum.png'
import cmcImage from '../assets/products/cmc-carboxymethyl-cellulose.png'
import calciumChlorideImage from '../assets/products/calcium-chloride.png'
import sodiumBenzoateImage from '../assets/products/sodium-benzoate.png'
import potassiumSorbateImage from '../assets/products/potassium-sorbate.png'

export type ProductItem = {
  name: string
  category: string
  description: string
  image: string
  availableGrades?: string[]
  keyFunctions: string[]
  applications: string[]
  industries: string[]
}

export type SolutionItem = {
  name: string
  description: string
  image: string
  ingredients: string[]
}

export type IndustryItem = {
  name: string
  description: string
  icon: IconType
}

export type FeatureItem = {
  title: string
  description: string
  icon: IconType
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
] as const

export const productCategories = [
  'Colors',
  'Preservatives',
  'Antioxidants and Acidity Regulators',
  'Thickeners, Stabilizers and Emulsifiers',
  'pH Regulators and Anti-caking Agents',
  'Flavor Enhancers',
  'Sweeteners, Glazing Agents and Gases',
] as const

export const products: ProductItem[] = [
  {
    name: 'Caramel Colour',
    category: 'Colors',
    description: 'A versatile liquid or powdered colouring ingredient used to create warm brown tones and visual consistency in formulated products.',
    image: caramelColourImage,
    keyFunctions: ['Brown Colour Development', 'Shade Consistency', 'Visual Standardization', 'Water Dispersibility'],
    applications: ['Beverages', 'Sauces and Condiments', 'Bakery Products', 'Confectionery', 'Dairy Preparations'],
    industries: ['Food and Beverage', 'Dairy', 'Bakery', 'Confectionery'],
  },
  {
    name: 'Sodium Benzoate',
    category: 'Preservatives',
    description: 'A widely used preservative for formulated foods and beverages, supporting product stability and shelf-life management in suitable acidic systems.',
    image: sodiumBenzoateImage,
    keyFunctions: ['Preservation Support', 'Product Stability', 'Shelf-Life Management', 'Formulation Compatibility'],
    applications: ['Beverages', 'Fruit Preparations', 'Sauces and Condiments', 'Pickles', 'Pharmaceutical Liquids'],
    industries: ['Food and Beverage', 'Pharmaceutical', 'Ingredient Distribution'],
  },
  {
    name: 'Potassium Sorbate',
    category: 'Preservatives',
    description: 'A preservative used to help protect suitable food, beverage and formulated products from yeast and mould growth during storage.',
    image: potassiumSorbateImage,
    keyFunctions: ['Preservation Support', 'Yeast Control', 'Mould Control', 'Shelf-Life Management'],
    applications: ['Beverages', 'Bakery Products', 'Dairy Preparations', 'Sauces', 'Fruit Preparations', 'Confectionery'],
    industries: ['Food and Beverage', 'Dairy', 'Bakery', 'Confectionery'],
  },
  {
    name: 'Citric Acid',
    category: 'Antioxidants and Acidity Regulators',
    description: 'A food acidulant used to provide tartness, adjust acidity and support flavour balance across a broad range of formulations.',
    image: citricAcidImage,
    keyFunctions: ['Acidity Adjustment', 'Tartness', 'Flavour Balance', 'Chelation Support'],
    applications: ['Beverages', 'Confectionery', 'Jams and Preserves', 'Sauces', 'Seasonings', 'Processed Foods'],
    industries: ['Food and Beverage', 'Confectionery', 'Processed Food'],
  },
  {
    name: 'Ascorbic Acid / Vitamin C',
    category: 'Antioxidants and Acidity Regulators',
    description: 'An antioxidant and nutritional ingredient used in food and beverage formulations where oxidation management or vitamin C fortification is required.',
    image: ascorbicAcidImage,
    keyFunctions: ['Oxidation Management', 'Vitamin Fortification', 'Acidity Adjustment', 'Nutritional Support'],
    applications: ['Fruit Beverages', 'Nutritional Drinks', 'Bakery Products', 'Processed Fruit', 'Dietary Supplements'],
    industries: ['Food and Beverage', 'Nutraceutical', 'Bakery', 'Dietary Supplements'],
  },
  {
    name: 'Sodium Citrate',
    category: 'Antioxidants and Acidity Regulators',
    description: 'A buffering and acidity-regulating ingredient used to support pH control, flavour balance and processing performance in formulated foods.',
    image: sodiumCitrateImage,
    keyFunctions: ['Buffering', 'Acidity Regulation', 'Flavour Balance', 'Processing Support'],
    applications: ['Beverages', 'Processed Cheese', 'Dairy Products', 'Jams', 'Confectionery', 'Prepared Foods'],
    industries: ['Food and Beverage', 'Dairy', 'Confectionery', 'Processed Food'],
  },
  {
    name: 'Sodium Alginate',
    category: 'Thickeners, Stabilizers and Emulsifiers',
    description: 'A seaweed-derived hydrocolloid that provides thickening, stabilization and gel formation for controlled texture and processing performance.',
    image: sodiumAlginateImage,
    keyFunctions: ['Thickening', 'Stabilization', 'Gel Formation', 'Encapsulation', 'Water Binding'],
    applications: ['Ice Cream', 'Dairy Products', 'Fruit Preparations', 'Sauces', 'Confectionery', 'Popping Boba'],
    industries: ['Food and Beverage', 'Dairy', 'Confectionery', 'Ingredient Distribution'],
  },
  {
    name: 'Xanthan Gum',
    category: 'Thickeners, Stabilizers and Emulsifiers',
    description: 'A high-performance hydrocolloid used to build viscosity, suspend particles and improve texture across varied food and beverage systems.',
    image: xanthanGumImage,
    keyFunctions: ['Thickening', 'Suspension', 'Stabilization', 'Rheology Control', 'Texture Improvement'],
    applications: ['Sauces', 'Dressings', 'Beverages', 'Dairy Products', 'Bakery Products', 'Pharmaceutical Liquids'],
    industries: ['Food and Beverage', 'Dairy', 'Bakery', 'Pharmaceutical'],
  },
  {
    name: 'CMC (Carboxymethyl Cellulose)',
    category: 'Thickeners, Stabilizers and Emulsifiers',
    description: 'A cellulose-based functional ingredient that supports viscosity, water retention, suspension and consistent texture in formulated products.',
    image: cmcImage,
    keyFunctions: ['Water Retention', 'Thickening', 'Stabilization', 'Texture Improvement', 'Film Formation'],
    applications: ['Ice Cream', 'Dairy Products', 'Bakery Fillings', 'Sauces', 'Beverages', 'Pharmaceutical Liquids'],
    industries: ['Food and Beverage', 'Dairy', 'Bakery', 'Pharmaceutical'],
  },
  {
    name: 'Guar Gum',
    category: 'Thickeners, Stabilizers and Emulsifiers',
    description: 'A plant-derived hydrocolloid used to increase viscosity, improve water management and support texture in food formulations.',
    image: guarGumImage,
    keyFunctions: ['Viscosity Building', 'Water Binding', 'Stabilization', 'Texture Control'],
    applications: ['Sauces', 'Dressings', 'Ice Cream', 'Bakery Products', 'Beverages', 'Dairy Products'],
    industries: ['Food and Beverage', 'Dairy', 'Bakery', 'Ingredient Distribution'],
  },
  {
    name: 'Carrageenan',
    category: 'Thickeners, Stabilizers and Emulsifiers',
    description: 'A seaweed-derived hydrocolloid used for gel formation, suspension and texture development in dairy and other food applications.',
    image: carrageenanImage,
    keyFunctions: ['Gel Formation', 'Suspension', 'Stabilization', 'Texture Development'],
    applications: ['Dairy Products', 'Plant-Based Beverages', 'Desserts', 'Processed Meat', 'Sauces'],
    industries: ['Food and Beverage', 'Dairy', 'Plant-Based Food', 'Processed Food'],
  },
  {
    name: 'Calcium Chloride',
    category: 'pH Regulators and Anti-caking Agents',
    description: 'A soluble calcium salt used for firmness control, gel activation and processing support in selected food and industrial formulations.',
    image: calciumChlorideImage,
    keyFunctions: ['Firmness Control', 'Gel Activation', 'Calcium Enrichment', 'Process Control'],
    applications: ['Fruit Processing', 'Vegetable Processing', 'Cheese Making', 'Beverages', 'Popping Boba'],
    industries: ['Food and Beverage', 'Dairy', 'Processed Food'],
  },
  {
    name: 'Monosodium Glutamate (MSG)',
    category: 'Flavor Enhancers',
    description: 'A flavour-enhancing ingredient used to round out savoury profiles and contribute umami character in prepared food systems.',
    image: monosodiumGlutamateImage,
    keyFunctions: ['Umami Enhancement', 'Flavour Rounding', 'Taste Balance', 'Seasoning Efficiency'],
    applications: ['Seasoning Blends', 'Soups', 'Snacks', 'Sauces', 'Prepared Foods', 'Instant Meals'],
    industries: ['Food Manufacturing', 'Snacks', 'Seasonings', 'Prepared Foods'],
  },
  {
    name: 'Disodium Inosinate',
    category: 'Flavor Enhancers',
    description: 'A savoury taste enhancer used in combination with other seasoning ingredients to build depth and complexity in food formulations.',
    image: disodiumInosinateImage,
    keyFunctions: ['Savoury Enhancement', 'Taste Complexity', 'Flavour Rounding', 'Seasoning Support'],
    applications: ['Seasoning Blends', 'Snacks', 'Soups', 'Sauces', 'Instant Foods'],
    industries: ['Food Manufacturing', 'Snacks', 'Seasonings', 'Prepared Foods'],
  },
  {
    name: 'Disodium Guanylate',
    category: 'Flavor Enhancers',
    description: 'A flavour enhancer used in savoury formulations to support a fuller taste profile and complement seasoning systems.',
    image: disodiumGuanylateImage,
    keyFunctions: ['Savoury Enhancement', 'Taste Depth', 'Flavour Rounding', 'Seasoning Support'],
    applications: ['Seasoning Blends', 'Snacks', 'Soups', 'Sauces', 'Prepared Foods'],
    industries: ['Food Manufacturing', 'Snacks', 'Seasonings', 'Prepared Foods'],
  },
  {
    name: 'Sucralose',
    category: 'Sweeteners, Glazing Agents and Gases',
    description: 'A high-intensity sweetening ingredient used to provide sweetness in a range of reduced-sugar food and beverage formulations.',
    image: sucraloseImage,
    keyFunctions: ['Sweetness', 'Sugar Reduction Support', 'Flavour Consistency', 'Formulation Flexibility'],
    applications: ['Beverages', 'Dairy Products', 'Confectionery', 'Bakery Products', 'Tabletop Sweeteners'],
    industries: ['Food and Beverage', 'Dairy', 'Confectionery', 'Nutraceutical'],
  },
  {
    name: 'Steviol Glycosides',
    category: 'Sweeteners, Glazing Agents and Gases',
    description: 'Plant-derived sweetening ingredients used to develop sweetness in reduced-sugar beverages, foods and nutrition products.',
    image: steviolGlycosidesImage,
    keyFunctions: ['Sweetness', 'Plant-Derived Formulation', 'Sugar Reduction Support', 'Taste Balancing'],
    applications: ['Beverages', 'Dairy Products', 'Confectionery', 'Nutrition Products', 'Tabletop Sweeteners'],
    industries: ['Food and Beverage', 'Dairy', 'Confectionery', 'Nutraceutical'],
  },
  {
    name: 'Carnauba Wax',
    category: 'Sweeteners, Glazing Agents and Gases',
    description: 'A plant-derived glazing agent used to provide surface shine, protection and handling performance to suitable food products.',
    image: carnaubaWaxImage,
    keyFunctions: ['Surface Glazing', 'Shine Development', 'Surface Protection', 'Handling Support'],
    applications: ['Confectionery', 'Fruit Coatings', 'Tablets', 'Nutritional Products', 'Food Decorations'],
    industries: ['Food and Beverage', 'Confectionery', 'Pharmaceutical', 'Nutraceutical'],
  },
] as const

export const solutionSystems: SolutionItem[] = [
  {
    name: 'Ice Cream Stabilization System',
    description: 'Improves texture, creaminess, melt resistance and storage stability.',
    image:
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80',
    ingredients: ['Sodium Alginate', 'CMC', 'Xanthan Gum'],
  },
  {
    name: 'Beverage Stabilization System',
    description: 'Improves suspension stability, mouthfeel and product consistency.',
    image:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
    ingredients: ['Sodium Alginate', 'Xanthan Gum'],
  },
  {
    name: 'Dairy Stabilization System',
    description: 'Supports texture development and water management.',
    image:
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1200&q=80',
    ingredients: ['Sodium Alginate', 'CMC'],
  },
  {
    name: 'Sauce & Ketchup Stabilization System',
    description: 'Provides viscosity control and improved processing performance.',
    image:
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80',
    ingredients: ['Xanthan Gum', 'CMC', 'Sodium Alginate'],
  },
  {
    name: 'Popping Boba System',
    description: 'Supports controlled spherification and reliable membrane formation.',
    image:
      'https://images.unsplash.com/photo-1747016804753-866c3ed6b3b7?auto=format&fit=crop&w=1200&q=80',
    ingredients: ['Sodium Alginate', 'Calcium Chloride'],
  },
  {
    name: 'Preservation System',
    description: 'Supports microbial control and extended shelf life.',
    image: preservationSystemImage,
    ingredients: ['Potassium Sorbate', 'Sodium Benzoate'],
  },
] as const

export const industries: IndustryItem[] = [
  { name: 'Dairy Industry', description: 'Ingredient solutions for milk beverages, yogurt, flavored milk and dairy desserts.', icon: LuMilk },
  { name: 'Ice Cream & Frozen Desserts', description: 'Improves texture, creaminess, melt resistance and storage stability.', icon: FiDroplet },
  { name: 'Beverage Industry', description: 'Solutions for suspension, viscosity control and mouthfeel enhancement.', icon: FaGlassWater },
  { name: 'Sauces, Dressings & Condiments', description: 'Controlled viscosity, stability and processing performance.', icon: FaUtensils },
  { name: 'Bakery Industry', description: 'Moisture retention, texture improvement and consistency.', icon: GiBreadSlice },
  { name: 'Confectionery', description: 'Ingredient systems for gummies, jellies and fillings.', icon: GiCandyCanes },
  { name: 'Popping Boba & Dessert Applications', description: 'Specialized systems for controlled spherification.', icon: FiZap },
  { name: 'Pharmaceutical Industry', description: 'Functional excipients for tablets, syrups and controlled release formulations.', icon: GiPill },
  { name: 'Nutraceutical Industry', description: 'Ingredient solutions for dietary supplements and functional nutrition.', icon: FiLayers },
  { name: 'Personal Care', description: 'Functional ingredients for smooth, stable creams, moisturizers and personal care formulations.', icon: FiHeart },
  { name: 'Ingredient Distributors & Importers', description: 'Reliable sourcing solutions for distributors and industrial ingredient suppliers.', icon: FiTruck },
] as const

export const features: FeatureItem[] = [
  { title: 'Premium Quality', description: 'Selected ingredients that support premium product performance.', icon: FiShield },
  { title: 'Reliable Supply', description: 'Dependable sourcing and supply continuity for planning confidence.', icon: FiTruck },
  { title: 'Global Sourcing', description: 'International procurement networks with careful partner selection.', icon: FiGlobe },
  { title: 'Consistent Standards', description: 'Quality discipline that supports every shipment and every batch.', icon: FiCheckCircle },
  { title: 'Competitive Pricing', description: 'Value-focused supply without compromising material integrity.', icon: FiTag },
  { title: 'Customer Satisfaction', description: 'Responsive support built around long-term business partnerships.', icon: FiHeart },
] as const

export const qualityPoints = [
  'Strict quality standards',
  'Trusted sourcing',
  'Reliable supply chain',
  'Customer-first philosophy',
  'Premium ingredients',
] as const

export const contactDetails = [
  { label: 'Phone', value: '+91 75672 13011' },
  { label: 'Email', value: 'info.aurexonprime@gmail.com' },
  { label: 'GST Number', value: '24ACPFA0361F1ZP' },
] as const

export const aboutParagraphs = [
  'Aurexon Prime is an India-based export sourcing company specializing in hydrocolloids, stabilizers, gums, thickening agents, gelling agents and functional ingredients for the global food, beverage and pharmaceutical industries.',
  'We collaborate with qualified manufacturing partners to deliver reliable ingredient solutions supported by comprehensive technical documentation, responsive customer service and dependable global supply. Our commitment is to help manufacturers achieve consistent product performance through carefully selected functional ingredients and application-oriented solutions.',
  'Beyond supplying individual ingredients, Aurexon Prime focuses on delivering integrated ingredient systems that support texture optimization, viscosity control, stabilization, preservation, suspension, gel formation and formulation efficiency across diverse food and pharmaceutical applications.',
  'Whether supporting a dairy manufacturer, beverage producer, pharmaceutical formulator or ingredient distributor, our objective remains the same — to deliver quality, consistency and long-term value through professional export solutions.',
] as const

export const qualityParagraph =
  'Aurexon Prime operates with strict quality standards, trusted sourcing and a reliable supply chain. Every decision is guided by a customer-first philosophy and a clear commitment to premium ingredients that perform consistently.'