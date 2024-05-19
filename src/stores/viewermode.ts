import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type ViewerModeStore = {
  viewMode: 'candidate' | 'corporate';
  toggleViewMode: () => void;
  setViewMode: (mode: 'candidate' | 'corporate') => void;
};

export const useViewerModeStore = create<ViewerModeStore>()(
  devtools(
    persist(
      (set) => ({
        viewMode: 'candidate',

        toggleViewMode: () =>
          set((state) => ({
            viewMode:
              state.viewMode === 'candidate' ? 'corporate' : 'candidate',
          })),

        setViewMode: (mode) =>
          set({
            viewMode: mode,
          }),
      }),
      { name: 'viewerMode' },
    ),
  ),
);
