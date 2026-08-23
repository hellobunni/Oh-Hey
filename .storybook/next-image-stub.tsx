import * as React from "react";

/**
 * Storybook runs on @storybook/react-vite, so there is no Next runtime and
 * `next/image` blows up on `process`/`__NEXT_IMAGE_OPTS`. Alias it to a plain
 * <img> that honours the layout-affecting props (`fill`) and drops the
 * optimizer-only ones.
 */
type StubProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string | { src: string };
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  loader?: unknown;
  placeholder?: string;
  blurDataURL?: string;
  unoptimized?: boolean;
};

export default function NextImageStub({
  src,
  fill,
  priority: _priority,
  quality: _quality,
  loader: _loader,
  placeholder: _placeholder,
  blurDataURL: _blurDataURL,
  unoptimized: _unoptimized,
  style,
  ...rest
}: StubProps) {
  const resolved = typeof src === "string" ? src : src?.src;
  return (
    <img
      src={resolved}
      style={
        fill
          ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style }
          : style
      }
      {...rest}
    />
  );
}
