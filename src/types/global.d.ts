declare interface NodeModule {
  hot: {
    accept(path?: string, fn?: () => void, callback?: () => void): void;
  };
}

interface Window {
  __PRELOADED_STATE__: any;
}

type Maybe<T> = T | null | undefined
