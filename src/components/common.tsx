/*!
   Copyright 2018 Propel http://propel.site/.  All rights reserved.
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

// Trims whitespace.
export function normalizeCode(code: string): string {
  return code.trimRight();
}

export function docTitle(title: string): string {
  return title && title.length > 0 ? title : "Untitled Notebook";
}

export function nbUrl(nbId: string): string {
  const u = window.location.origin + "/notebook?nbId=" + nbId;
  return u;
}
