module.exports = {
  // tipo de ambiente dos testes
  // browser = jsdom (vai fazer o jest simular o dom)
  testEnvironment: 'jsdom',
  // vai ignorar pastas desnecessárias para os testes
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  // habilitando teste de cobertura
  collectCoverage: true,
  // de onde o teste de cobertura será coletado
  collectCovarageFrom: ['src/**/*.ts(x)'],
  // arquivo onde teremos configurações que serão carregadas antes dos testes iniciarem
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
