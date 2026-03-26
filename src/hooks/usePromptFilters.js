import { useEffect, useMemo, useState } from "react";
import { prompts } from "../data/prompts.js";

export function usePromptFilters(initialLevel = "") {
  const [search, setSearch] = useState("");
  const [selectedLevel, setSelectedLevel] = useState(initialLevel);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedContext, setSelectedContext] = useState("");
  const [selectedAITool, setSelectedAITool] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  useEffect(() => {
    setSelectedLevel(initialLevel);
  }, [initialLevel]);

  const filtered = useMemo(() => {
    return prompts.filter((prompt) => {
      if (selectedLevel && prompt.level !== selectedLevel) return false;
      if (selectedSkill && prompt.skill !== selectedSkill) return false;
      if (selectedContext && prompt.context !== selectedContext) return false;
      if (selectedAITool && selectedAITool !== "any" && !prompt.aiToolCompatibility.includes(selectedAITool)) return false;
      if (selectedType && prompt.type !== selectedType) return false;
      if (showFeaturedOnly && !prompt.featured) return false;

      if (search) {
        const query = search.toLowerCase();

        return (
          prompt.title.toLowerCase().includes(query) ||
          prompt.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          prompt.objective.toLowerCase().includes(query) ||
          prompt.skill.toLowerCase().includes(query) ||
          prompt.level.toLowerCase().includes(query) ||
          prompt.promptText.toLowerCase().includes(query) ||
          prompt.subcategory.toLowerCase().includes(query) ||
          prompt.aiToolCompatibility.some((tool) => tool.toLowerCase().includes(query)) ||
          prompt.type.toLowerCase().includes(query)
        );
      }

      return true;
    });
  }, [
    search,
    selectedLevel,
    selectedSkill,
    selectedContext,
    selectedAITool,
    selectedType,
    showFeaturedOnly,
  ]);

  const resetFilters = () => {
    setSearch("");
    setSelectedLevel(initialLevel);
    setSelectedSkill("");
    setSelectedContext("");
    setSelectedAITool("");
    setSelectedType("");
    setShowFeaturedOnly(false);
  };

  return {
    search,
    setSearch,
    selectedLevel,
    setSelectedLevel,
    selectedSkill,
    setSelectedSkill,
    selectedContext,
    setSelectedContext,
    selectedAITool,
    setSelectedAITool,
    selectedType,
    setSelectedType,
    showFeaturedOnly,
    setShowFeaturedOnly,
    filtered,
    resetFilters,
    hasActiveFilters: !!(
      search ||
      selectedLevel ||
      selectedSkill ||
      selectedContext ||
      selectedAITool ||
      selectedType ||
      showFeaturedOnly
    ),
    totalCount: prompts.length,
  };
}
