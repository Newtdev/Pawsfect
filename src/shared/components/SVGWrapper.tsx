import {View, Text, ViewStyle} from 'react-native';
import React, {JSX} from 'react';
import svg from '@/assets/svg';

/**
 * @module SVGWrapper
 * @description A reusable component that dynamically loads and renders SVG components based on the provided name.
 *
 * @typedef {Object} SVGWrapperProps
 * @property {string} name - The key/name of the SVG component to render from the SVG registry
 * @property {Object} [props] - Additional props to spread onto the SVG component
 *
 * @component
 * @example
 * // Import and use with specific SVG name
 * <SVGWrapper name="arrow" width={24} height={24} fill="#000" />
 *
 * @param {SVGWrapperProps} props - Component props
 * @param {string} props.name - Name of the SVG to render (must exist in SVG registry)
 * @param {Object} [props.rest] - Additional props to pass to the SVG component
 * @returns {JSX.Element|null} The rendered SVG component or null if not found
 *
 * @throws Will return null if the requested SVG name doesn't exist in the registry
 *
 * @note This component relies on a centralized SVG registry import (svg index file)
 *       Ensure all SVGs are properly registered before using their names
 */

type SVGWrapperProps = {
  name: keyof typeof svg;
  color?: string;
  fill?: string;
  style?: ViewStyle;
  [x: string]: unknown;
};
export default function SVGWrapper({
  name,
  ...props
}: SVGWrapperProps): JSX.Element | null {
  const SVG = svg?.[name];
  return SVG ? <SVG {...props} /> : null;
}
