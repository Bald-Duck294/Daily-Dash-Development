import { useQuery } from '@tanstack/react-query';
// Adjust this import based on where your API functions are stored
import { fetchToiletFeaturesByName, fetchToiletFeaturesById } from '@/features/configurations/configurations.api'; 

// 1. Define a Query Key Factory to keep your cache keys organized
export const toiletFeatureKeys = {
  all: ['toiletFeatures'],
  byName: (name) => [...toiletFeatureKeys.all, 'name', name],
  byId: (id) => [...toiletFeatureKeys.all, 'id', id],
};

// 2. Hook for fetching by Name
export const useToiletFeaturesByName = (name) => {
  return useQuery({
    queryKey: toiletFeatureKeys.byName(name),
    queryFn: () => fetchToiletFeaturesByName(name),
    // The query will not execute until the `name` exists
    enabled: !!name, 
    // Optional: Add staleTime if you don't want it to refetch immediately on window focus
    // staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// 3. Hook for fetching by ID
export const useToiletFeaturesById = (id) => {
  return useQuery({
    queryKey: toiletFeatureKeys.byId(id),
    queryFn: () => fetchToiletFeaturesById(id),
    // The query will not execute until the `id` exists
    enabled: !!id,
  });
};