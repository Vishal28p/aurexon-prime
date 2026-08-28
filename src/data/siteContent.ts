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
import sodiumAlginateImage from '../assets/products/01_sodium_alginate.png'
import xanthanGumImage from '../assets/products/02_xanthan_gum (1).png'
import cmcImage from '../assets/products/03_cmc_carboxymethyl_cellulose.png'
import calciumChlorideImage from '../assets/products/04_calcium_chloride.png'
import sodiumBenzoateImage from '../assets/products/05_sodium_benzoate.png'
import potassiumSorbateImage from '../assets/products/06_potassium_sorbate.png'
import preservationSystemImage from '../assets/products/preservation system.png'

export type ProductItem = {
  name: string
  description: string
  image: string
  availableGrades?: string[]
  keyFunctions: string[]
  applications: string[]
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

export const products: ProductItem[] = [
  {
    name: 'Sodium Alginate',
    description:
      'Naturally derived hydrocolloid offering excellent thickening, stabilization and gel formation for food and pharmaceutical applications.',
    image: sodiumAlginateImage,
    availableGrades: ['Food Grade', 'Pharmaceutical Grade', 'Multiple Viscosity Options'],
    keyFunctions: ['Thickening', 'Stabilization', 'Gel Formation', 'Encapsulation', 'Texture Enhancement', 'Water Binding'],
    applications: ['Ice Cream', 'Dairy Products', 'Fruit Preparations', 'Sauces & Dressings', 'Popping Boba', 'Confectionery', 'Pharmaceutical Tablets', 'Controlled Release Systems'],
  },
  {
    name: 'Xanthan Gum',
    description:
      'Excellent rheology modifier providing suspension, viscosity stability and texture improvement across wide pH ranges.',
    image: xanthanGumImage,
    keyFunctions: ['Thickening', 'Suspension', 'Stabilization', 'Rheology Control', 'Texture Improvement'],
    applications: ['Sauces', 'Dressings', 'Beverage Systems', 'Dairy Products', 'Syrups', 'Oral Suspensions'],
  },
  {
    name: 'CMC (Carboxymethyl Cellulose)',
    description:
      'Multifunctional cellulose derivative improving viscosity, water retention and product consistency.',
    image: cmcImage,
    keyFunctions: ['Water Retention', 'Thickening', 'Stabilization', 'Texture Improvement', 'Film Formation'],
    applications: ['Ice Cream', 'Dairy Products', 'Bakery Fillings', 'Sauces', 'Pharmaceutical Syrups', 'Tablet Formulations'],
  },
  {
    name: 'Calcium Chloride',
    description:
      'Reliable calcium source supporting gel activation, firmness and process efficiency.',
    image: calciumChlorideImage,
    keyFunctions: ['Gel Activation', 'Firming', 'Calcium Enrichment', 'Process Control'],
    applications: ['Popping Boba', 'Fruit Processing', 'Vegetable Processing', 'Dairy Applications', 'Beverage Fortification'],
  },
  {
    name: 'Potassium Sorbate',
    description:
      'Effective preservative helping control yeast and mold while extending shelf life.',
    image: potassiumSorbateImage,
    keyFunctions: ['Preservation', 'Shelf Life Extension', 'Yeast & Mold Control', 'Product Protection'],
    applications: ['Beverages', 'Sauces', 'Dairy Products', 'Bakery Products', 'Confectionery', 'Pharmaceutical Preparations'],
  },
  {
    name: 'Sodium Benzoate',
    description:
      'An effective preservative that helps control yeast, mold and certain bacteria, extending shelf life and maintaining product quality, particularly in acidic food, beverage and pharmaceutical formulations.',
    image: sodiumBenzoateImage,
    keyFunctions: ['Preservation', 'Antimicrobial Protection', 'Shelf Life Extension', 'Microbial Control', 'Product Stability'],
    applications: ['Carbonated Soft Drinks', 'Fruit Juices', 'Sauces & Ketchup', 'Jams & Fruit Preparations', 'Pickles & Condiments', 'Pharmaceutical Syrups', 'Oral Liquid Formulations'],
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