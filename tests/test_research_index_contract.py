from pathlib import Path
import re
import unittest


ROOT = Path(__file__).resolve().parents[1]
INDEX_ROUTE = ROOT / "app" / "research" / "page.tsx"
RESEARCH_DIR = ROOT / "content" / "research"


class ResearchIndexContractTest(unittest.TestCase):
    def test_index_loads_committed_research_markdown(self):
        markdown = sorted(RESEARCH_DIR.glob("*.md")) + sorted(RESEARCH_DIR.glob("*.mdx"))
        self.assertGreater(len(markdown), 0, "fixture requires committed Research articles")

        source = INDEX_ROUTE.read_text()
        self.assertRegex(
            source,
            re.compile(r"import\s*\{\s*getContent\s*\}\s*from\s*['\"]\.\./\.\./lib/content['\"]"),
            "Research index must import the same Markdown loader used by detail pages and sitemap",
        )
        self.assertRegex(
            source,
            re.compile(r"researchPosts\s*=\s*getContent\(['\"]research['\"]\)"),
            "Research index must derive its cards from committed content/research Markdown",
        )
        self.assertNotRegex(
            source,
            re.compile(r"import\s*\{[^}]*researchPosts[^}]*\}\s*from\s*['\"]\.\./fleet-data['\"]"),
            "Research index must not use the legacy empty fleet-data array",
        )


if __name__ == "__main__":
    unittest.main()
