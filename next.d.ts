declare module "next" {
  export interface Metadata {
    title?: string;
    description?: string;
    metadataBase?: URL;
    openGraph?: Record<string, unknown>;
    [key: string]: unknown;
  }

  export interface Viewport {
    width?: string | number;
    initialScale?: number;
    themeColor?: string;
    [key: string]: unknown;
  }
}

declare module "next/image" {
  import type { ImgHTMLAttributes } from "react";

  const Image: (props: ImgHTMLAttributes<HTMLImageElement> & {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
    className?: string;
  }) => JSX.Element;

  export default Image;
}

declare module "next/link" {
  import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

  const Link: (
    props: PropsWithChildren<
      AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
    >
  ) => JSX.Element;

  export default Link;
}

declare module "three" {
  export class Group {
    rotation: { x: number; y: number; z: number };
    position: { x: number; y: number; z: number };
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      boxGeometry: any;
      directionalLight: any;
      group: any;
      mesh: any;
      meshStandardMaterial: any;
      planeGeometry: any;
      pointLight: any;
      sphereGeometry: any;
      torusGeometry: any;
    }
  }
}

export {};
