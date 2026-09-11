       // Set copyright year
        document.getElementById('yearSpan').textContent = new Date().getFullYear();

        // Mobile Menu toggle
        const mobileBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Hero Demo Unlock logic
        function unlockHeroDemo() {
            const input = document.getElementById('heroPassInput').value;
            const msg = document.getElementById('heroDemoMsg');
            if (input === '1234') {
                document.getElementById('heroLockedState').classList.add('hidden');
                document.getElementById('heroUnlockedState').classList.remove('hidden');
                msg.textContent = '';
            } else {
                msg.textContent = 'Incorrect PIN! Try 1234';
                msg.className = 'text-[11px] text-rose-400 font-mono h-4';
            }
        }

        function resetHeroDemo() {
            document.getElementById('heroPassInput').value = '';
            document.getElementById('heroLockedState').classList.remove('hidden');
            document.getElementById('heroUnlockedState').classList.add('hidden');
            document.getElementById('heroDemoMsg').textContent = 'Hint: default PIN is 1234';
            document.getElementById('heroDemoMsg').className = 'text-[11px] text-slate-500 font-mono h-4';
        }

        // Interactive URL Simulator logic
        const simForm = document.getElementById('simUrlForm');
        const simInput = document.getElementById('simUrlInput');
        const simDisplayUrl = document.getElementById('simDisplayUrl');

        simForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let url = simInput.value.trim() || 'example.com';
            url = url.replace(/^https?:\/\//, '');
            simDisplayUrl.textContent = 'https://' + url;
            document.getElementById('simUnlockedUrl').textContent = url;
            document.getElementById('heroLockUrl').textContent = url;
            resetSim();
        });

        function testSimUnlock() {
            const val = document.getElementById('simPassInput').value;
            const feedback = document.getElementById('simFeedback');
            if (val === '0000') {
                document.getElementById('simLockedCard').classList.add('hidden');
                document.getElementById('simUnlockedCard').classList.remove('hidden');
            } else {
                feedback.textContent = 'Invalid passcode! Demo PIN is 0000';
                feedback.className = 'text-xs font-mono text-rose-400 h-4';
            }
        }

        function resetSim() {
            document.getElementById('simPassInput').value = '';
            document.getElementById('simFeedback').textContent = 'Demo PIN: 0000';
            document.getElementById('simFeedback').className = 'text-xs font-mono text-slate-500 h-4';
            document.getElementById('simLockedCard').classList.remove('hidden');
            document.getElementById('simUnlockedCard').classList.add('hidden');
        }

        // FAQ Accordion Toggle
        function toggleFaq(index) {
            const answer = document.getElementById(`faqAnswer-${index}`);
            const icon = document.getElementById(`faqIcon-${index}`);
            
            if (answer.classList.contains('hidden')) {
                answer.classList.remove('hidden');
                icon.classList.add('rotate-180');
            } else {
                answer.classList.add('hidden');
                icon.classList.remove('rotate-180');
            }
        }

        // Modal Helpers
        function openModal(id) {
            document.getElementById(id).classList.remove('hidden');
        }

        function closeModal(id) {
            document.getElementById(id).classList.add('hidden');
        }
