import { useEffect, useMemo, useState } from "react";
import { prompts } from "../data/prompts.js";
import {
  getRichLabel,
  RICH_ACTIVITY_LABELS,
  RICH_ANTI_SUBSTITUTION_LABELS,
  RICH_CORRECTION_MODE_LABELS,
  RICH_GUIDANCE_LEVEL_LABELS,
  RICH_PEDAGOGICAL_FUNCTION_LABELS,
  RICH_REWRITE_POLICY_LABELS,
  RICH_SUPPORT_LANGUAGE_LABELS,
} from "../config/richPromptLabels.js";

function normalizeSearchValue(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getRichSearchTerms(prompt) {
  return [
    prompt.cefrActivityPrimary,
    getRichLabel(RICH_ACTIVITY_LABELS, prompt.cefrActivityPrimary),
    prompt.pedagogicalFunction,
    getRichLabel(RICH_PEDAGOGICAL_FUNCTION_LABELS, prompt.pedagogicalFunction),
    prompt.guidanceLevel,
    getRichLabel(RICH_GUIDANCE_LEVEL_LABELS, prompt.guidanceLevel),
    prompt.correctionMode,
    getRichLabel(RICH_CORRECTION_MODE_LABELS, prompt.correctionMode),
    prompt.rewritePolicy,
    getRichLabel(RICH_REWRITE_POLICY_LABELS, prompt.rewritePolicy),
    prompt.antiSubstitutionPolicy,
    getRichLabel(RICH_ANTI_SUBSTITUTION_LABELS, prompt.antiSubstitutionPolicy),
    prompt.supportLanguage,
    getRichLabel(RICH_SUPPORT_LANGUAGE_LABELS, prompt.supportLanguage),
    prompt.interactionMode,
  ];
}

function matchesSearch(prompt, search) {
  if (!search) {
    return true;
  }

  const query = normalizeSearchValue(search);
  const searchableValues = [
    prompt.title,
    ...(prompt.tags || []),
    prompt.objective,
    prompt.skill,
    prompt.level,
    prompt.promptText,
    prompt.subcategory,
    ...(prompt.aiToolCompatibility || []),
    prompt.type,
    ...getRichSearchTerms(prompt),
  ];

  return searchableValues
    .filter(Boolean)
    .some((value) => normalizeSearchValue(value).includes(query));
}

function sortUsedValues(values, labelMap, preferredOrder = []) {
  const uniqueValues = [...new Set(values.filter(Boolean))];

  return uniqueValues.sort((left, right) => {
    const leftOrder = preferredOrder.indexOf(left);
    const rightOrder = preferredOrder.indexOf(right);

    if (leftOrder !== -1 || rightOrder !== -1) {
      if (leftOrder === -1) return 1;
      if (rightOrder === -1) return -1;
      return leftOrder - rightOrder;
    }

    return getRichLabel(labelMap, left).localeCompare(getRichLabel(labelMap, right), "fr");
  });
}

function normalizeInitialFilters(initialFiltersInput) {
  if (typeof initialFiltersInput === "string") {
    return {
      search: "",
      level: initialFiltersInput,
      skill: "",
      context: "",
      aiTool: "",
      type: "",
      activity: "",
      pedagogicalFunction: "",
      pedagogicalFamily: "",
      guidanceLevel: "",
      antiSubstitutionPolicy: "",
      showFeaturedOnly: false,
    };
  }

  const initialFilters = initialFiltersInput || {};

  return {
    search: initialFilters.search || "",
    level: initialFilters.level || "",
    skill: initialFilters.skill || "",
    context: initialFilters.context || "",
    aiTool: initialFilters.aiTool || "",
    type: initialFilters.type || "",
    activity: initialFilters.activity || "",
    pedagogicalFunction: initialFilters.pedagogicalFunction || "",
    pedagogicalFamily: initialFilters.pedagogicalFamily || "",
    guidanceLevel: initialFilters.guidanceLevel || "",
    antiSubstitutionPolicy: initialFilters.antiSubstitutionPolicy || "",
    showFeaturedOnly: Boolean(initialFilters.showFeaturedOnly),
  };
}

export function usePromptFilters(initialFiltersInput = {}) {
  const initialFilters = normalizeInitialFilters(initialFiltersInput);
  const [search, setSearch] = useState(initialFilters.search);
  const [selectedLevel, setSelectedLevel] = useState(initialFilters.level);
  const [selectedSkill, setSelectedSkill] = useState(initialFilters.skill);
  const [selectedContext, setSelectedContext] = useState(initialFilters.context);
  const [selectedAITool, setSelectedAITool] = useState(initialFilters.aiTool);
  const [selectedType, setSelectedType] = useState(initialFilters.type);
  const [selectedActivity, setSelectedActivity] = useState(initialFilters.activity);
  const [selectedPedagogicalFunction, setSelectedPedagogicalFunction] = useState(
    initialFilters.pedagogicalFunction,
  );
  const [selectedPedagogicalFamily, setSelectedPedagogicalFamily] = useState(
    initialFilters.pedagogicalFamily,
  );
  const [selectedGuidanceLevel, setSelectedGuidanceLevel] = useState(initialFilters.guidanceLevel);
  const [selectedAntiSubstitutionPolicy, setSelectedAntiSubstitutionPolicy] = useState(
    initialFilters.antiSubstitutionPolicy,
  );
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(initialFilters.showFeaturedOnly);

  useEffect(() => {
    setSearch(initialFilters.search);
    setSelectedLevel(initialFilters.level);
    setSelectedSkill(initialFilters.skill);
    setSelectedContext(initialFilters.context);
    setSelectedAITool(initialFilters.aiTool);
    setSelectedType(initialFilters.type);
    setSelectedActivity(initialFilters.activity);
    setSelectedPedagogicalFunction(initialFilters.pedagogicalFunction);
    setSelectedPedagogicalFamily(initialFilters.pedagogicalFamily);
    setSelectedGuidanceLevel(initialFilters.guidanceLevel);
    setSelectedAntiSubstitutionPolicy(initialFilters.antiSubstitutionPolicy);
    setShowFeaturedOnly(initialFilters.showFeaturedOnly);
  }, [
    initialFilters.search,
    initialFilters.level,
    initialFilters.skill,
    initialFilters.context,
    initialFilters.aiTool,
    initialFilters.type,
    initialFilters.activity,
    initialFilters.pedagogicalFunction,
    initialFilters.pedagogicalFamily,
    initialFilters.guidanceLevel,
    initialFilters.antiSubstitutionPolicy,
    initialFilters.showFeaturedOnly,
  ]);

  const filtered = useMemo(() => {
    return prompts.filter((prompt) => {
      if (selectedLevel && prompt.level !== selectedLevel) return false;
      if (selectedSkill && prompt.skill !== selectedSkill) return false;
      if (selectedContext && prompt.context !== selectedContext) return false;
      if (selectedAITool && selectedAITool !== "any" && !prompt.aiToolCompatibility.includes(selectedAITool)) return false;
      if (selectedType && prompt.type !== selectedType) return false;
      if (selectedActivity && prompt.cefrActivityPrimary !== selectedActivity) return false;
      if (selectedPedagogicalFunction && prompt.pedagogicalFunction !== selectedPedagogicalFunction) return false;
      if (
        !selectedPedagogicalFunction &&
        selectedPedagogicalFamily === "simulation_socratique" &&
        !["simulation", "socratique"].includes(prompt.pedagogicalFunction)
      ) {
        return false;
      }
      if (selectedGuidanceLevel && prompt.guidanceLevel !== selectedGuidanceLevel) return false;
      if (selectedAntiSubstitutionPolicy && prompt.antiSubstitutionPolicy !== selectedAntiSubstitutionPolicy) return false;
      if (showFeaturedOnly && !prompt.featured) return false;

      return matchesSearch(prompt, search);
    });
  }, [
    search,
    selectedLevel,
    selectedSkill,
    selectedContext,
    selectedAITool,
    selectedType,
    selectedActivity,
    selectedPedagogicalFunction,
    selectedPedagogicalFamily,
    selectedGuidanceLevel,
    selectedAntiSubstitutionPolicy,
    showFeaturedOnly,
  ]);

  const availableActivities = useMemo(
    () => sortUsedValues(prompts.map((prompt) => prompt.cefrActivityPrimary), RICH_ACTIVITY_LABELS),
    [],
  );

  const availablePedagogicalFunctions = useMemo(
    () =>
      sortUsedValues(
        prompts.map((prompt) => prompt.pedagogicalFunction),
        RICH_PEDAGOGICAL_FUNCTION_LABELS,
      ),
    [],
  );

  const availableGuidanceLevels = useMemo(
    () =>
      sortUsedValues(
        prompts.map((prompt) => prompt.guidanceLevel),
        RICH_GUIDANCE_LEVEL_LABELS,
        ["fort", "moyen", "faible"],
      ),
    [],
  );

  const availableAntiSubstitutionPolicies = useMemo(
    () =>
      sortUsedValues(
        prompts.map((prompt) => prompt.antiSubstitutionPolicy),
        RICH_ANTI_SUBSTITUTION_LABELS,
        ["none", "light_guardrails", "attempt_first", "strict_no_answer"],
      ),
    [],
  );

  const resetFilters = () => {
    setSearch(initialFilters.search);
    setSelectedLevel(initialFilters.level);
    setSelectedSkill(initialFilters.skill);
    setSelectedContext(initialFilters.context);
    setSelectedAITool(initialFilters.aiTool);
    setSelectedType(initialFilters.type);
    setSelectedActivity(initialFilters.activity);
    setSelectedPedagogicalFunction(initialFilters.pedagogicalFunction);
    setSelectedPedagogicalFamily(initialFilters.pedagogicalFamily);
    setSelectedGuidanceLevel(initialFilters.guidanceLevel);
    setSelectedAntiSubstitutionPolicy(initialFilters.antiSubstitutionPolicy);
    setShowFeaturedOnly(initialFilters.showFeaturedOnly);
  };

  const hasAdvancedFilters = !!(
    selectedSkill ||
    selectedContext ||
    selectedAITool ||
    selectedType ||
    selectedAntiSubstitutionPolicy ||
    showFeaturedOnly
  );

  const hasActiveFilters = !!(
    search ||
    selectedLevel ||
    selectedSkill ||
    selectedContext ||
    selectedAITool ||
    selectedType ||
    selectedActivity ||
    selectedPedagogicalFunction ||
    selectedPedagogicalFamily ||
    selectedGuidanceLevel ||
    selectedAntiSubstitutionPolicy ||
    showFeaturedOnly
  );

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
    selectedActivity,
    setSelectedActivity,
    selectedPedagogicalFunction,
    setSelectedPedagogicalFunction,
    selectedPedagogicalFamily,
    selectedGuidanceLevel,
    setSelectedGuidanceLevel,
    selectedAntiSubstitutionPolicy,
    setSelectedAntiSubstitutionPolicy,
    showFeaturedOnly,
    setShowFeaturedOnly,
    availableActivities,
    availablePedagogicalFunctions,
    availableGuidanceLevels,
    availableAntiSubstitutionPolicies,
    filtered,
    resetFilters,
    hasActiveFilters,
    hasAdvancedFilters,
    totalCount: prompts.length,
  };
}
